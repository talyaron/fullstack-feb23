import { Outlet } from 'react-router-dom'
import Navbar from '../../components/NavBar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>footer</footer>
    </div>
  )
}

export default Layout