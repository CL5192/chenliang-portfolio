import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Locale } from './types'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const STORAGE_KEY = 'portfolio-locale'
const DEFAULT_LOCALE: Locale = 'en'

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const storedLocale = window.localStorage.getItem(STORAGE_KEY)
  return storedLocale === 'de' ? 'de' : DEFAULT_LOCALE
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  )

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider')
  }
  return context
}
