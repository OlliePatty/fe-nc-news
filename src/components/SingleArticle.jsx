import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticlesById } from '../utils'
import Comments from './Comments'
import Error from './Error'

export default function SingleArticle() {
    const { id } = useParams()
    const [ article, setArticle ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        getArticlesById(id)
        .then((response)=>{
        setLoading(false)
        return setArticle(response.data.article)
        })
        .catch((error)=>{
          setError(error)
        })
      }, [])

  return error ? <Error error={error}/> : 
  loading ? <p className='loading'>Loading</p> : (
    <main className='single-article'>
        <img src={article.article_img_url} alt={article.title}/>
        <h2>{article.title}</h2>
        <h3>By: {article.author}</h3>
        <h5>🕚 {article.created_at.slice(0, 10)}</h5>
        <p>{article.body}</p>
        <br></br>
        <p>Votes: {article.votes}</p>
        <button className='vote-button'>👍</button><button className='vote-button'>👎</button>
        <p>Comments: {article.comment_count}</p>
        <Comments id={id}/>
    </main>
  )
}
