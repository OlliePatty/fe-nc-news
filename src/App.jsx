import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SingleArticle from './components/SingleArticle'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Home />} />
        <Route path='/articles/:id' element={<SingleArticle />} />
        <Route path='/coding/articles' element={<Home />} />
        <Route path='/football/articles' element={<Home />} />
        <Route path='/cooking/articles' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
