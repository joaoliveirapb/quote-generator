import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <p className="py-4 text-center font-mono text-sm text-zinc-500">
        created by{' '}
        <Link
          href="https://github.com/joaoliveirapb"
          target="_blank"
          className="font-bold underline transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
        >
          @joaoliveirapb
        </Link>
      </p>
    </footer>
  )
}
