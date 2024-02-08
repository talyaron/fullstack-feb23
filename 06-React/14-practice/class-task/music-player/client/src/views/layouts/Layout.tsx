import { Outlet } from 'react-router-dom'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { styled } from '@mui/material/styles';

const Layout = () => {
  return (
    <div className='height'>
      <Navbar />
      <Outlet  />
      <Footer />

    </div>
  )
}

export default Layout