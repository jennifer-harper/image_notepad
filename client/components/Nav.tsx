import {Link} from 'react-router-dom'

export function Nav () {
  return (
    <>
      <div className='nav'>
        <Link to='/'><p>Home</p></Link>
        <Link to='/search'><p>Search</p></Link>
      </div>
    </>
  )
}

// export default Nav