import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticlesById, patchArticleVotes } from '../utils'
import Comments from './Comments'
import Error from './Error'
import Loading from './Loading'
import ArticleVotes from './ArticleVotes'

export default function SingleArticle() {
    const { id } = useParams()
    const [ article, setArticle ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        getArticlesById(id)
        .then((articleData)=>{
        setLoading(false)
        return setArticle(articleData)
        })
        .catch((error)=>{
          setError(error)
        })
      }, [])

  return error ? <Error error={error}/> : 
  loading ? <Loading /> : (
    <main className='single-article'>
        <img src={article.article_img_url} alt={article.title}/>
        <h2>{article.title}</h2>
        <h3>By: {article.author}</h3>
        <h5>🕚 {article.created_at.slice(8, 10)}{article.created_at.slice(4, 8)}{article.created_at.slice(0, 4)}</h5>
        <p>{article.body}</p>
        <ArticleVotes articleVotes={article.votes} articleId={article.article_id}/>
        <Comments articleId={article.article_id} />
    </main>
  )
}
