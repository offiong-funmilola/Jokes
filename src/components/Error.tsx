import {Link} from 'react-router-dom'

function Error() {
  return (
    <div>
      <h2>Page not Found</h2>
      <Link to='/'>Visist Our Page</Link>
    </div>
  )
}

export default Error
