import { useState, useEffect } from 'react'
import { getAllArticles } from '../utils'
import ArticleCard from './ArticleCard'

export default function Home() {
  const [ articles, setArticles ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(()=>{
    getAllArticles()
    .then((response)=>{
      setLoading(false)
      return setArticles(response.data.articles)
    })
    .catch((error)=>{
      setError(error.response)
    })
  }, [])

  return error ? <h2 className='error'>{error.status} {error.data.msg}</h2> : 
  loading ? <p className='loading'>Loading</p> : (
    <main className='article-list'>
      {articles.map((article)=>{
        return <ArticleCard article={article} key={article.article_id}/>
      })}
    </main>
  )

}
