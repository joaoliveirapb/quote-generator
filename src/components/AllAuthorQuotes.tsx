import { Quote } from './Quote'

interface QuotesProps {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
}

interface AllAuthorQuotesProps {
  allAuthorQuotes: QuotesProps[]
  author: string
}

export function AllAuthorQuotes({
  allAuthorQuotes,
  author,
}: AllAuthorQuotesProps) {
  return (
    <div className="space-y-20">
      <h1 className="pl-12 text-4xl font-bold text-zinc-700 dark:text-zinc-500 max-sm:pl-0">
        {author}
      </h1>
      <div className="space-y-16">
        {allAuthorQuotes.map((quotes) => (
          <Quote key={quotes._id} text={quotes.quoteText} />
        ))}
      </div>
    </div>
  )
}
