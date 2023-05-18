import {Link} from 'react-router-dom'

export function Nav () {
  return (
    <>
      <div className='nav'>
        <Link to='/'><p>See All Images</p></Link>
        <Link to='/search'><p>Find UnSplash Images</p></Link>
        <Link to='/db'><p>Upload Images</p></Link>
      </div>
    </>
  )
}

// export default Nav