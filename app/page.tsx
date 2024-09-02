import Greet from '../components/greed'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Greet />

      <Button variant={'destructive'}>Salir</Button>
      <ModeToggle />
    </main>
  )
}
