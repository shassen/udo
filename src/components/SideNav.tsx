import { ComboboxTest } from './Combobox'

export function SideNav() {
  return (
    <main className="flex flex-col items-center min-h-screen w-[20vw] border-2 border-white">
      <section className="h-[10vh] m-2 w-[95%] border-2 border-red-300">
        <ComboboxTest />
      </section>
      <section className="flex h-[86vh] justify-center w-[95%] border-2 border-red-300">
        test
      </section>
    </main>
  )
}
