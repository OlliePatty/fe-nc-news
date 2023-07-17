import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Home from './components/Home'

export const defaultURL = axios.create({
  baseURL: 'https://ollies-nc-news.onrender.com/api'
})

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
