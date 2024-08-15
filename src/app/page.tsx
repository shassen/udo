import { FirstComponent } from '@/components/FirstComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <FirstComponent
        text={"hello world, it's working. Time to get started!"}
      />
    </main>
  );
}
