import {Link} from 'react-router-dom'

export function Nav () {
  return (
    <>
      <div className='nav'>
        <Link to='/'><p>See All Images</p></Link>
        <Link to='/search'><p>Find UnSplash Images</p></Link>
        <Link to='/db'><p>Upload Images</p></Link>
        <Link to='/login'><p>Login</p></Link>
        <Link to='/signup'><p>Sign Up</p></Link>
      </div>
    </>
  )
}

// export default Nav