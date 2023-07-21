import { useState, useEffect } from 'react'
import { getCommentsById } from "../utils"
import Loading from './Loading'
import AddComment from './AddComment'

export default function Comments({articleId}) {
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
    <section className='comments-section'>
      <AddComment setComments={setComments} articleId={articleId} />
      <p>Comments: {Object.keys(comments).length}</p>
        {comments.map((comment)=>{
            return <div className='comment-list' key={comment.comment_id}>
                <h4>{comment.author}</h4>
                <h5>{comment.created_at.slice(8, 10)}{comment.created_at.slice(4, 8)}{comment.created_at.slice(0, 4)}</h5>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                <button className='like-button'>👍</button>
                <button className='dislike-button'>👎</button>
            </div>
        })}
    </section>
  )
}
