import { get } from './home/data'
export default async function App() {
  const num = await get()
  return (
    <>
      <section className='container relative mx-auto flex w-16 text-3xl font-bold text-red-400'>{num}</section>
    </>
  )
}
