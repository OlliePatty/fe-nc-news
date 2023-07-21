import { useState } from 'react'
import { postComments } from '../utils'

export default function AddComment({setComments, articleId}) {
    const [ newComment, setNewComment ] = useState('')
    const [ error, setError ] = useState(null)
    const [ commentStatus, setCommentStatus ] = useState(null)

function handleSubmit(event) {
    event.preventDefault()
    postComments(newComment, articleId).then((postedComment)=>{
        setComments((currComments)=>{
            setCommentStatus('✅ Comment posted')
            setError(null)
            setNewComment('')
            return [postedComment, ...currComments]
        })
    })
    .catch((error)=>{
        setCommentStatus(null)
        if(error.message === 'Network Error'){
            setError(error.message)
        } else {
            setError(error.response.status)
        }
    })
}

  return (
    <form className="add-comments-section" onSubmit={handleSubmit}>
    <label htmlFor='new-comment'>Add a comment:</label><br></br>
    <textarea id='new-comment' maxLength='200' value = {newComment} onChange={((event)=>{
        setNewComment(event.target.value)
    })}/><br></br>
    <p>Characters remaining: {200 - newComment.length}</p>
    {error === 'Network Error' ? <p>❌ Something went wrong, please refresh and try again.</p> : null}
    {error === 404 ? <p>❌ Please log in to post a comment</p> : null }
    {error === 400 ? <p>❌ Invalid comment</p> : null }
    {commentStatus ? <p>{commentStatus}</p> : null }
    <button className='submit-comment-button'>Submit</button>
  </form>
  )
}
