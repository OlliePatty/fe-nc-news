import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SingleArticle from './components/SingleArticle'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Home />} />
        <Route path='/articles/:id' element={<SingleArticle />} />
        <Route path='/articles/topic/:topic' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
