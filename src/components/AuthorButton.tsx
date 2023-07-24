import { MoveRight } from 'lucide-react'

export function AuthorButton() {
  return (
    <button className="group mt-10 flex w-full max-w-[600px] items-center justify-between px-6 py-9 transition-colors hover:bg-zinc-800">
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-zinc-600 group-hover:text-zinc-100 dark:text-zinc-400">
          Bill Gates
        </span>
        <span className="text-left text-sm font-medium text-zinc-500">
          business
        </span>
      </div>
      <MoveRight className="invisible text-zinc-100 group-hover:visible" />
    </button>
  )
}