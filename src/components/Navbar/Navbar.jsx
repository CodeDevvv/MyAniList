import './navbar.css'
import logo from '../../assets/anilistlogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <img src={logo} alt="myanilogo" /> 
      <div className='menu'>
        <Link to="/">Home</Link>
        <Link to="/form">UpdateList</Link>
      </div>
    </div>
  )
}

export default Navbar
