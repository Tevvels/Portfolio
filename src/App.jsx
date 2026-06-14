import ProjectContainer from './components/projectContainer'
import Landing from './pages/Landing.jsx'
import Contact from './pages/Contact.jsx'
import MyWork from './pages/MyWork.jsx'
import NotFound from './pages/NotFound.jsx'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import '@fortawesome/fontawesome-free/css/all.min.css';
import DarkModeButton from './components/DarkModeButton.jsx'
import './Styles/General.css'
function App() {

  return(
    <>
    <Navigation />
    <DarkModeButton />
    <Landing />
    <Footer/>
    </>
  )
}

export default App
