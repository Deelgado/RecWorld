import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Footer from './Components/Footer/Footer'
function App() {
  

  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
       <Footer/> 
    </div>
  )
}

export default App;
