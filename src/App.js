import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Pagenotfound from './Pages/Pagenotfound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'


function App() {
  return (
    <> 
     <div>
      <Navbar/>     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
     </div>
    </>
  );
}

export default App;
