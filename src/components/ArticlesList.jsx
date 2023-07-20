import { useState, useEffect } from 'react'
import { getArticles } from '../utils'
import { useParams } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import Error from './Error'
import Loading from './Loading'

export default function ArticlesList() {
  const { topic } = useParams()
  const [ articles, setArticles ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(()=>{
    getArticles(topic)
    .then((articlesData)=>{
      setLoading(false)
      return setArticles(articlesData)
    })
    .catch((error)=>{
      setError(error)
    })
  }, [topic])

  return error ? <Error error={error}/> : 
  loading ? <Loading /> : (
    <main className='article-list'>
      {articles.map((article)=>{
          return <ArticleCard article={article} key={article.article_id}/>
      })}
    </main>
  )

}
