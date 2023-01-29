import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='border-black rounded-sm border-solid border-2'>
        <h1 className='text-orange-700'>Scoreboard</h1>
      </div>
    </div>
  )
}

export default App
