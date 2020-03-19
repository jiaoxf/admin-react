import React, { useState, useEffect } from 'react'
function Example(){
  const [ count, setCount] = useState(0)
  const [ fruit, setFruit] = useState('banana')
  useEffect(() => {
    console.log(`you click ${count}`)
  })
  function clickFruit() {
    setFruit('apple')
  }
  return(
    <div>
      <p>you click { count } times</p>
      <button onClick={ () => setCount(count + 1)}>
        click me!
      </button>
      <p>这是 { fruit } </p>
      <button onClick={ clickFruit }>
        click me!
      </button>
    </div>
  )
}

export default Example