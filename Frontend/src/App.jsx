import React from 'react'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Genres from './Genres/Genres'
import { Navigate,Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import{ Toaster } from 'react-hot-toast';
import {useAuth} from './context/AuthProvider'
import About from './About/About'

function App() {
   const [authUser,setAuthUser]=useAuth()

  return (
    <>
      {/* <Home /> */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={authUser?< Genres />:<Navigate to='/signup'/>} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/about" element={< About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App