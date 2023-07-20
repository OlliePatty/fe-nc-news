import { useState, useEffect } from 'react'
import { getAllTopics } from '../utils'
import { Link } from 'react-router-dom'
import Error from './Error'
import Loading from './Loading'

export default function Topics() {
    const [ topics, setTopics ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        getAllTopics()
        .then((topicsData)=>{
          setLoading(false)
          return setTopics(topicsData)
        })
        .catch((error)=>{
          setError(error)
        })
      }, [])

  return error ? <Error error={error}/> :
  loading ? <Loading /> : (
    <nav className='topics'>
        <Link to={`/`}>
            <button className='nav-button'>Home</button>
                </Link>
        {topics.map((topic)=>{
            return <Link to={`/articles/topic/${topic.slug}`} key={topic.slug}>
            <button className='nav-button'>{topic.slug[0].toUpperCase() + topic.slug.slice(1,topic.slug.length)}</button>
                </Link>
        })}
    </nav>
  )
}
