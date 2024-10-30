import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className='min-h-[calc(100vh-294px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout