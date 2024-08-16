import { FirstComponent } from '@/components/FirstComponent'
import { SideNav } from '@/components/SideNav'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-700">
      {/* <FirstComponent
        text={"hello world, it's working. Time to get started!"}
      /> */}
      <SideNav />
    </main>
  )
}
