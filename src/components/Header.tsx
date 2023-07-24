import { RefreshCw } from 'lucide-react'
import { ThemeButton } from './ThemeButton'

interface HeaderProps {
  getRandomQuote: () => void
}

export function Header({ getRandomQuote }: HeaderProps) {
  return (
    <header className="flex justify-end gap-10 px-28 py-4">
      <button
        onClick={getRandomQuote}
        className="flex items-center gap-2 px-2 text-lg font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-400"
      >
        random
        <RefreshCw size={18} />
      </button>
      <ThemeButton />
    </header>
  )
}
