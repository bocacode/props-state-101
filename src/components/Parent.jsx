import React, { useState } from 'react'
import Child from './Child'

const initial = {
  car: 'Audi',
  awesome: true,
  age: 45,
  pets: ['Ryder', 'Dragon'],
}
const dumpy = {
  car: 'Yugo',
  awesome: false,
  age: 28,
  pets: ['Indigo'],
}

function Parent() {
  const [theMan, setTheMan] = useState(initial)
  const description = 'Some long string I can never remember.'
  return (
    <>
      <p>Parent</p>
      {theMan.awesome ? 
        <button onClick={() => setTheMan(dumpy)}>
        Downgrade</button>
      :
        <button onClick={() => setTheMan(initial)}>
        Upgrade</button>
      }
      <Child
        theMan={theMan}
        dumpy={dumpy}
        initial={initial}
        setTheMan={setTheMan}
        desc={description}
      />
    </>
  )
}

export default Parent
