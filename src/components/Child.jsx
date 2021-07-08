import React, { useState } from 'react'

function Child(props) {
  const [clickCount, setClickCount] = useState(0)
  const { desc, initial, dumpy, setTheMan } = props
  const { car, age, awesome, pets } = props.theMan
  return (
    <>
      <h1>{car}</h1>
      <p>{(awesome) ? 'AWESOME!' : 'Not Awesome.'}</p>
      <button onClick={() => setClickCount(clickCount + 1)}>
        Clicks: {clickCount}</button>
      <p>{desc}</p>
      <h2>Age: {age}</h2>
      <button onClick={() => {
        if(car === initial.car) {
          setTheMan(dumpy)
        } else {
          setTheMan(initial)
        }
      }}>
        TOGGLE</button>
    </>
  )
}

export default Child