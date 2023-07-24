'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeButton() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={changeTheme}
      className="flex items-center gap-2 px-2 text-lg font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-400"
    >
      {theme === 'light' ? (
        <>
          dark
          <Moon size={18} />
        </>
      ) : (
        <>
          light
          <Sun size={18} />
        </>
      )}
    </button>
  )
}
