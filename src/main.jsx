import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form'

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='form' element={<Form />}/>
    </Routes>
    </BrowserRouter>


  </div>
)
