import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import FsBackend from 'i18next-fs-backend'
import axios from 'axios'
import ChainedBackend from 'i18next-chained-backend'

const bundledResources = {
  zh: {
    translations: {
      helloworld: 'xxxxxxxxx',
    },
  },
}

i18n.use(ChainedBackend).init({
  debug: true,
  lng: 'zh',
  fallbackLng: 'zh',
  backend: {
    // loadPath: '/locales/{{lng}}/{{ns}}.json',
    backends: [
      // HttpBackend,
      resourcesToBackend(bundledResources),
      // HttpBackend,
      // FsBackend,
      // resourcesToBackend(async (lng: string, ns: string) => {
      //   console.log('----resourcesToBackend---')
      //   const res = await axios.get(
      //     `http://localhost:9999/locales/${lng}/translation.json`
      //   )
      //   return res
      // }),
    ],
    // backendOptions: [
    // {
    //   loadPath: 'http://localhost:9999/locales/{{lng}}/{{ns}}.json',
    // },
    // {
    //   loadPath: './locales_cache/{{lng}}/{{ns}}.json',
    // },
    // ],
    // backendOptions: [
    //   {
    //     loadPath: '/locales/{{lng}}/{{ns}}.json',
    //   },
    // ],
  },
})
export default i18n
