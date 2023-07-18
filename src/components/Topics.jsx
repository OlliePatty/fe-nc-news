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

  return loading ? <p>loading</p> : (
    <nav className='topics'>
        <Link to={`/`}>
            <button>Home</button>
                </Link>
        {topics.map((topic)=>{
            return <Link to={`/articles/topic/${topic.slug}`} key={topic.slug}>
            <button>{topic.slug[0].toUpperCase() + topic.slug.slice(1,topic.slug.length)}</button>
                </Link>
        })}
    </nav>
  )
}
