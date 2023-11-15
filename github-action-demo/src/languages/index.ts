import { Resource } from 'i18next'
import en from './en'
import zh from './zh'

const resources: Resource = {
  en: {
    translation: {
      ...en,
    },
  },
  zh: {
    translation: {
      ...zh,
    },
  },
}
export default resources
