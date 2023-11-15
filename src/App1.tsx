import React, { useEffect, useState } from 'react'
import { loadLocale } from './lang'
import { FormattedMessage, IntlProvider, injectIntl } from 'react-intl'

const Child = injectIntl(({ intl }: any) => {
  return <p>{intl.formatMessage({ id: 'helloworld' }, { number: 98765 })}</p>
})

function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh')

  return (
    <div>
      <button
        onClick={() => {
          setLang(lang === 'en' ? 'zh' : 'en')
        }}
      >
        当前：{lang}
      </button>
      <IntlProvider
        locale={lang}
        defaultLocale="zh"
        messages={loadLocale(lang).message}
      >
        <Child />
        {/* <p>
          <FormattedMessage
            id="helloworld"
            defaultMessage="你好，世界"
            values={{ number: 98765 }}
          />
        </p> */}
      </IntlProvider>
    </div>
  )
}

export default App
