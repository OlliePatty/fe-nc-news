import { useState, useEffect } from 'react'
import { getCommentsById } from "../utils"

export default function Comments({id}) {
    const [ comments, setComments ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        getCommentsById(id)
        .then((response)=>{
        setLoading(false)
        return setComments(response.data.comments)
        })
        .catch((error)=>{
          setError(error.response)
        })
      }, [])

  return error ? <h2 className='error'>{error.status} {error.data.msg}</h2> : 
  loading ? <p className='loading'>Loading</p> : (
    <section>
        {comments.map((comment)=>{
            return <div className='comment-list' key={comment.comment_id}>
                <h4>{comment.author}</h4>
                <h5>{comment.created_at.slice(0, 10)}</h5>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                <button className='vote-button'>👍</button><button className='vote-button'>👎</button>
            </div>
        })}
    </section>
  )
}
