import ProjectContainer from './components/projectContainer'
import Landing from './pages/Landing.jsx'
import Contact from './pages/Contact.jsx'
import MyWork from './pages/MyWork.jsx'
import NotFound from './pages/NotFound.jsx'
import Footer from './components/Footer'
import Header from './components/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Styles/General.css'
function App() {

  return(
    <div className='grid'>
    <Landing />
    <Footer/>
    </div>
  )
}

export default App
