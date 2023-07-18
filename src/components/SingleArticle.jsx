import { useParams } from 'react-router-dom'
import { defaultURL } from '../utils'
import { useState, useEffect } from 'react'

export default function SingleArticle() {
    const { id } = useParams()
    const [ article, setArticle ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        defaultURL.get(`/articles/${id}`)
        .then((response)=>{
        setLoading(false)
        return setArticle(response.data.article)
        })
        .catch((error)=>{
          setError(error.response.data)
        })
      }, [])

  return error ? <h2 className='error'>{error.status} {error.msg}</h2> : 
  loading ? <p>Loading</p> : (
    <main className='single-article'>
        <img src={article.article_img_url} alt={article.title}/>
        <h2>{article.title}</h2>
        <h3>By: {article.author}</h3>
        <h5>🕚 {article.created_at.slice(0, 10)}</h5>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <button>👍</button><button>👎</button>
        <p>Comments: {article.comment_count}</p>
    </main>
  )
}
