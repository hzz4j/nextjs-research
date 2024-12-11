'use client'
import { useActionState } from 'react'
import { updateNum } from '../actions'
type State = {
  msg: string
}
export default function EditForm({ num }: { num: number }) {
  const initialState: State = { msg: 'success' }

  const updateNumByIndex = updateNum.bind(this, 0)

  const [state, formAction] = useActionState(updateNumByIndex, initialState)

  return (
    <form action={formAction}>
      <input type='number' name='amount' defaultValue={num} className='border p-2' />
      <button className='rounded-md bg-green-500 p-2 text-white'>Update</button>
    </form>
  )
}
