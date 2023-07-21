import { useState, useEffect } from 'react'
import { patchArticleVotes } from "../utils"

export default function ArticleVotes({articleVotes, articleId}) {
    const [ votes, setVotes ] = useState(articleVotes)
    const [ error, setError ] = useState(null)
    const [ clicked, setClicked ] = useState(null)
    

    function handleArticleVote(event, id, vote) {
      if(clicked === null || clicked === 'liked' || clicked === 'disliked'){
        setVotes((currVotes)=>{
          return currVotes + vote
        })
        patchArticleVotes(id, vote).then(()=>{})
        .catch((error)=>{
          setClicked(null)
          setError('Something went wrong, please refresh and try again.')
          setVotes((currVotes)=>{
            return currVotes - vote
          })
        })
      }
      }

  return (
    <section className='votes-section'>
    <p>Votes: {votes}</p>
    <button id={clicked === 'liked' ? 'like-button-on' : null} className='like-button' onClick={(event)=>{
      if(clicked === null){
        setClicked('liked')
        handleArticleVote(event, articleId, 1)
      }
      if(clicked === 'liked'){
        setClicked(null)
        handleArticleVote(event, articleId, -1)
      }
    }}>👍</button>
    <button id={clicked === 'disliked' ? 'dislike-button-on' : null} className='dislike-button' onClick={(event)=>{
      if(clicked === null){
        setClicked('disliked')
        handleArticleVote(event, articleId, -1)
      }
      if(clicked === 'disliked'){
        setClicked(null)
        handleArticleVote(event, articleId, 1)
      }
    }} >👎</button>
    {error ? <p>{error}</p> : null}
    </section>
  )

}
