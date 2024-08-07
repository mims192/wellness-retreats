
import React from 'react'
import { Navigate,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
import BookRetreat from './Components/BookRetreat'
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search/>}/>
        {/*<Route path='/book/:id' element={<BookRetreat/>}/>*/}
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App

