import { useState } from 'react'
import './Header.css'
import { Outlet } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      Nav bar and Website Header
      <Outlet/>
    </>
  )
}

export default Header
