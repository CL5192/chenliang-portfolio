export const supportedLocales = ['en', 'de'] as const

export type Locale = (typeof supportedLocales)[number]
