import EditForm from './edit-form'
import { get } from './data'
export default async function Page() {
  const num = await get()

  return (
    <section className='mx-auto w-fit'>
      <EditForm num={num} />
    </section>
  )
}
