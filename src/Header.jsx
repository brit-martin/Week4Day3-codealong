import { useState } from 'react'
import './Header.css'
import { Outlet, Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  )
}

export default Header
