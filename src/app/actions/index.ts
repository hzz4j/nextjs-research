'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { update } from '../home/data'
type State = {
  msg: string
}

export async function updateNum(index: number, _: State, formData: FormData) {
  await update(index, +formData.get('amount'))
  revalidatePath('/')
  redirect('/')
  return { msg: 'success' }
}
