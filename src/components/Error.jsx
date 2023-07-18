export default function Error({error}) {
    
  return error.message === 'Network Error' ? <p className='error' >{error.message}</p> :
  (
    <p className='error'>{error.request.status} {error.response.data.msg}</p>
  )
}
