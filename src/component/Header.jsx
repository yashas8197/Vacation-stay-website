import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-dark'>
      <div className='container'>
        <h1 className='display-1 text-light py-4'>My Vacation Stays Website</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className='nav-link' to='/'>Overview</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/stays'>Stays</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;