import { useState } from 'react'
import './static/sass/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/portfolio_definitivo' element={<Container></Container>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
