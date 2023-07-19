import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SingleArticle from './components/SingleArticle'
import ArticlesList from './components/ArticlesList'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Home />} />
        <Route path='/articles/:id' element={<SingleArticle />} />
        <Route path='/articles/topic/:topic' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
