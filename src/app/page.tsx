'use client'

import { AllAuthorQuotes } from '@/components/AllAuthorQuotes'
import { AuthorButton } from '@/components/AuthorButton'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Loading } from '@/components/Loading'
import { Quote } from '@/components/Quote'
import { useEffect, useState } from 'react'

interface QuotesProps {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
}

export default function Home() {
  const [isAllAuthorQuotes, setIsAllAuthorQuotes] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [randomQuote, setRandomQuote] = useState<QuotesProps | null>(null)
  const [allAuthorQuotes, setAllAuthorQuotes] = useState<QuotesProps[] | null>(
    null,
  )

  async function getRandomQuote() {
    try {
      setLoading(true)
      setIsAllAuthorQuotes(false)
      const response = await fetch(
        'https://quote-garden.onrender.com/api/v3/quotes/random',
      )
      const { data } = await response.json()
      setRandomQuote(data[0])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function getAllAuthorQuotes(author: string) {
    try {
      setLoading(true)
      setIsAllAuthorQuotes(true)
      const response = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${author}`,
      )
      const { data } = await response.json()
      setAllAuthorQuotes(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      <Header getRandomQuote={getRandomQuote} />
      <section className="flex flex-1 flex-col items-center justify-center py-5">
        {!isAllAuthorQuotes ? (
          randomQuote && !loading ? (
            <>
              <Quote text={randomQuote.quoteText} />
              <AuthorButton
                author={randomQuote.quoteAuthor}
                genre={randomQuote.quoteGenre}
                getAllAuthorQuotes={getAllAuthorQuotes}
              />
            </>
          ) : (
            <Loading />
          )
        ) : allAuthorQuotes && randomQuote && !loading ? (
          <AllAuthorQuotes
            allAuthorQuotes={allAuthorQuotes}
            author={randomQuote.quoteAuthor}
          />
        ) : (
          <Loading />
        )}
      </section>
      <Footer />
    </main>
  )
}
