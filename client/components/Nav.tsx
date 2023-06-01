import {Link} from 'react-router-dom'

export function Nav () {
  return (
    <>
      <div className='nav'>
        <Link to='/db'><p>Upload Images</p></Link>
      </div>
    </>
  )
}

// export default Nav