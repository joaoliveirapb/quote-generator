import { MoveRight } from 'lucide-react'

interface AuthorButtonProps {
  author: string
  genre: string
  getAllAuthorQuotes: (author: string) => void
}

export function AuthorButton({
  author,
  genre,
  getAllAuthorQuotes,
}: AuthorButtonProps) {
  return (
    <button
      onClick={() => getAllAuthorQuotes(author)}
      className="group mt-10 flex w-full max-w-[600px] items-center justify-between px-6 py-9 transition-colors hover:bg-zinc-800"
    >
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-zinc-600 group-hover:text-zinc-100 dark:text-zinc-400">
          {author}
        </span>
        <span className="text-left text-sm font-medium text-zinc-500">
          {genre}
        </span>
      </div>
      <MoveRight className="invisible text-zinc-100 group-hover:visible" />
    </button>
  )
}
