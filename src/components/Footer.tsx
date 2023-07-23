import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <p className="py-4 text-center font-mono text-sm text-zinc-500">
        created by{' '}
        <Link
          href="https://github.com/joaoliveirapb"
          className="font-bold underline transition-colors hover:text-zinc-600"
        >
          @joaoliveirapb
        </Link>
      </p>
    </footer>
  )
}
