import { Link } from 'react-router-dom'
import Topics from './Topics'


export default function Header() {
  return (
    <header>
    <Link className='link' to='/'>
        <h1 className='nc-news'>NC News</h1>
     </Link>
     <Topics />
    </header>
  )
}
