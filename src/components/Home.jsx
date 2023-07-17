import { useState, useEffect } from 'react'
import { defaultURL } from '../App'
import ArticleCard from './ArticleCard'

export default function Home() {
  const [ articles, setArticles ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(()=>{
    setLoading(true)
    defaultURL.get('/articles')
    .then((response)=>{
      return setArticles(response.data)
    })
    .then(()=>{
      setLoading(false)
    })
    .catch(console.log)
  }, [])
  
  return loading ? <p>Loading</p> : (
    <div className='article-list'>
      {articles.articles.map((article)=>{
        return <ArticleCard article={article} key={article.article_id}/>
      })}
    </div>
  )
  
}
