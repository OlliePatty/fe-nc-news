import { useState, useEffect } from 'react'
import { getAllTopics } from '../utils'
import { Link } from 'react-router-dom'

export default function Topics() {
    const [ loading, setLoading ] = useState(true)
    const [ topics, setTopics ] = useState([])

    useEffect(()=>{
        getAllTopics()
        .then((response)=>{
          setLoading(false)
          return setTopics(response.data.topics)
        })
        .catch((error)=>{
          setError(error)
        })
      }, [])

      console.log(topics)
  return (
    <nav className='topics'>
        <Link to={`/`}>
            <button>Home</button>
                </Link>
        {topics.map((topic)=>{
            return <Link to={`/${topic.slug}/articles`} key={topic.slug}>
            <button>{topic.slug}</button>
                </Link>
        })}
    </nav>
  )
}
