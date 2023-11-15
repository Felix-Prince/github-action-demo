import en from './en'
import zh from './zh'

export const loadLocale = (
  lang: 'zh' | 'en'
): {
  locale: string
  message: { [key: string]: string }
} => {
  let locale = null
  let message = null
  switch (lang) {
    case 'en':
      locale = 'en-US'
      message = en
      break
    case 'zh':
      locale = 'zh-CN'
      message = zh
      break
    default:
      locale = 'zh-CN'
      message = zh
      break
  }
  return { locale, message }
}
