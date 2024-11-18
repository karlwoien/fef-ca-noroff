import { useState } from 'react'
import Header from './components/header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <main className='min-h-screen'></main>
      <Footer />
    </div>
  )
}

export default App
