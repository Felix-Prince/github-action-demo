import { useEffect, useState } from 'react'
import Child from './Child'
import { useImmer, useImmerReducer } from 'use-immer'

function TaskReducer(draft: any, action: any) {
  if (action.type === 'test') {
    draft.push({
      id: 3,
      title: 'helloworld',
      seen: true,
    })
  }
}

function App() {
  const [text, setText] = useState('')
  const [first, setFirst] = useState(0)
  const [person, updatePerson] = useImmer({
    name: 'zs',
    age: 18,
    child: {
      name: 'ls',
      age: 19,
    },
  })

  const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ]
  const [myList, updateMyList] = useImmer(initialList)
  const [task, dispatchTask] = useImmerReducer(TaskReducer, initialList)

  function handleToggleMyList(id: number, nextSeen: boolean) {
    updateMyList((draft) => {
      const artwork: any = draft.find((a) => a.id === id)
      artwork.seen = nextSeen
    })
  }
  // console.log('--App--', +new Date())
  // useEffect(() => {
  //   let t = Math.random().toString()
  //   console.log(t)
  //   setTimeout(() => {
  //     setText(t)
  //   }, 2000)
  //   // const handle = () => {
  //   //   setIsChild(!isChild)
  //   // }
  //   // window.addEventListener('offline', handle)

  //   // return () => {
  //   //   window.removeEventListener('offline', handle)
  //   // }
  // }, [])

  // const handleClick = () => {
  //   const x = Math.random()
  //   setFirst(first + 1)
  //   setFirst(first + 1)
  //   setFirst(first + 1)
  //   // setText('xxxxxx' + x)
  // }

  const show = () => {
    // e.stopPropagation()
    // console.log(text, first)
    console.log(person)
  }

  const changeName = () => {
    updatePerson((draft) => {
      draft.name = '张三'
    })
  }
  const changeAge = () => {
    updatePerson((draft) => {
      draft.age = 19
    })
  }
  const changeChildName = () => {
    updatePerson((draft) => {
      draft.child.name = '李四'
    })
  }
  const changeChildAge = () => {
    updatePerson((draft) => {
      draft.child.age = 5
    })
  }

  return (
    <>
      <div>
        {/* {text}
        <Child /> */}
        <div onClick={changeName}>name: {person.name}</div>
        <div onClick={changeAge}>age: {person.age}</div>
        <div>
          child:
          <div onClick={changeChildName}>name:{person.child.name}</div>
          <div onClick={changeChildAge}>age:{person.child.age}</div>
        </div>
      </div>
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            {item.title}--{item.seen.toString()}
          </li>
        ))}
      </ul>
      <button onClick={() => dispatchTask({ type: 'test' })}>show</button>
    </>
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
