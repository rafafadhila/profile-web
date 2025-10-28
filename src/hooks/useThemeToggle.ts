'use client'

import { useState, useEffect } from 'react'

export function useThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(true)

  // Load from localStorage on first render
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setIsDark(storedTheme === 'dark')
    }
  }, [])

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  function toggleTheme() {
    setIsDark(prev => !prev)
  }

  return { isDark, toggleTheme }
}
