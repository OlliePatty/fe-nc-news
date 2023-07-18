import { useState, useEffect } from 'react'
import { getAllArticles } from '../utils'
import { useParams } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import Error from './Error'

export default function Home() {
  const { topic } = useParams()
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
      setError(error)
    })
  }, [])

  return error ? <Error error={error}/> : 
  loading ? <p className='loading'>Loading</p> : (
    <main className='article-list'>
      {articles.map((article)=>{
        if(article.topic === topic){
        return <ArticleCard article={article} key={article.article_id}/>
        } else if(!topic){
          return <ArticleCard article={article} key={article.article_id}/>
      }
      })}
    </main>
  )

}
