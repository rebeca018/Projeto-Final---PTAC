import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cadastro from './cadastro'
import Destaque from './destaque'
import Detalhe from './detalhe'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route  path="/destaque" element={<Destaque />}></Route>
        <Route  path="/detalhe" element={<Detalhe />}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
