import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Updates from './pages/Updates'

const App = () => {

  
  return (

    
    <div className="dark:bg-gray-900 duration-200 ">

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/updates" element={<Updates/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>

    
  )
}

export default App