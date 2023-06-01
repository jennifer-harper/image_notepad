import {Link} from 'react-router-dom'

export function Nav () {
  return (
    <>
      <nav className='nav'>
        <Link to='/'><p>Home</p></Link>
        <Link to='/db'><p>Upload Images</p></Link>
      </nav>
    </>
  )
}

// export default Nav