import React, { useState } from 'react'

function App () {
  const [message, setMessage] = useState('')

  return (
    <form onSubmit={console.log('done')}>
      <label>
        Name:
        <input type='text' value={message} onChange={e => setMessage(e.target.value)}/>
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default App
