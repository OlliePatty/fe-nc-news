import { useState, useEffect } from 'react'
import { patchArticleVotes } from "../utils"

export default function ArticleVotes({articleVotes, articleId}) {
    const [ votes, setVotes ] = useState(articleVotes)
    const [ error, setError ] = useState(null)
    const [ clicked, setClicked ] = useState(null)

    function handleArticleVote(event, id, vote) {
      if(clicked){
        vote = vote*2
      }
        setVotes((currVotes)=>{
          return currVotes + vote
        })
        patchArticleVotes(id, vote).then(()=>{
        })
        .catch((error)=>{
          setError('Something went wrong, please refresh and try again.')
          setVotes((currVotes)=>{
            return currVotes - vote
          })
          event.currentTarget.disabled = false
        })
      }

  return (
    <div>
    <p>Votes: {votes}</p>
    <button className='vote-button' disabled={clicked === 'liked' ? true : false} onClick={(event)=>{
        handleArticleVote(event, articleId, 1)
        setClicked('liked')
    }}>👍</button>
    <button className='vote-button' disabled={clicked === 'disliked' ? true : false} onClick={(event)=>{
        handleArticleVote(event, articleId, -1)
        setClicked('disliked')
    }} >👎</button>
    {error ? <p>{error}</p> : null}
    </div>
  )

}