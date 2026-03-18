'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Pastikan komponen sudah di-mount di klien sebelum merender UI toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  // resolvedTheme berguna untuk mengetahui tema aktual jika mode 'system' dipilih
  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')

  function toggleTheme() {
    setTheme(isDark ? 'light' : 'dark')
  }

  return { isDark, toggleTheme, mounted }
}