import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Manager/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },
  ])

  return (
    <>
      <div className='main'>
        <RouterProvider router={router} />
        <Footer/>
      </div>
    </>
  )
}

export default App
