import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link className='link' to='/'>
        <h1 className='nc-news'>NC News</h1>
     </Link>
  )
}
