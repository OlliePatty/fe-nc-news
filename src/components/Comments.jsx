import { useState, useEffect } from 'react'
import { getCommentsById } from "../utils"
import Loading from './Loading'

export default function Comments({articleId, commentCount}) {
    const [ comments, setComments ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        getCommentsById(articleId)
        .then((commentsData)=>{
        setLoading(false)
        return setComments(commentsData)
        })
        .catch((error)=>{
          setError(error)
        })
      }, [])

  return error ? <h2 className='error'>No Comments</h2> : 
  loading ? <Loading /> : (
    <section>
      <p>Comments: {commentCount}</p>
        {comments.map((comment)=>{
            return <div className='comment-list' key={comment.comment_id}>
                <h4>{comment.author}</h4>
                <h5>{comment.created_at.slice(0, 10)}</h5>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                <button className='vote-button'>👍</button>
                <button className='vote-button'>👎</button>
            </div>
        })}
    </section>
  )
}
