import React, { useState } from 'react'

function App () {
  const [message, setMessage] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        console.log(
          'action: addMessage with payload: ' + message + ' to Redux store'
        )
        setMessage('')
      }}
    >

      Message:
      <input
        type='text'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <input type='submit' value='Send Message' />
    </form>
  )
}

export default App
