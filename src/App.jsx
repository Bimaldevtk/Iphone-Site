import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';



function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black'>
    <Navbar/>
    <Hero/> 
    <Highlights/>
    </main>
  )
}

export default App
