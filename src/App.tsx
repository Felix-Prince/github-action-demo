import { useEffect, useState } from 'react'
import Child from './Child'

// function TaskReducer(draft: any, action: any) {
//   if (action.type === 'test') {
//     draft.push({
//       id: 3,
//       title: 'helloworld',
//       seen: true,
//     })
//   }
// }

function App() {
  const [text, setText] = useState('')
  const [first, setFirst] = useState(0)

  // const initialList = [
  //   { id: 0, title: 'Big Bellies', seen: false },
  //   { id: 1, title: 'Lunar Landscape', seen: false },
  //   { id: 2, title: 'Terracotta Army', seen: true },
  // ]

  console.log('--App--', +new Date())
  useEffect(() => {
    let t = Math.random().toString()
    console.log(t)
    setTimeout(() => {
      setText(t)
    }, 2000)
    // const handle = () => {
    //   setIsChild(!isChild)
    // }
    // window.addEventListener('offline', handle)

    // return () => {
    //   window.removeEventListener('offline', handle)
    // }
  }, [])

  const handleClick = () => {
    const x = Math.random()
    setFirst(first + 1)
    setFirst(first + 1)
    setFirst(first + 1)
    // setText('xxxxxx' + x)
  }

  return (
    <div>
      {text}
      <Child />
      <button onClick={handleClick}>show</button>
    </div>
  )
}

export default App

export const fn = (cb?: () => void) => {
  console.log('---fn---')
  cb?.()
}

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('---DOMContentLoaded---')
//   fn()
// })
