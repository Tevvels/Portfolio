import ProjectContainer from './components/projectContainer'
import Landing from './pages/Landing.jsx'
import Contact from './pages/Contact.jsx'
import MyWork from './pages/MyWork.jsx'
import NotFound from './pages/NotFound.jsx'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Styles/General.css'
import Navigation from './components/Navigation.jsx'
function App() {

  return(
    <div className='grid'>
    <Navigation />
    <main className="portfolio-content-canvas">
      <section id="landing">
    <Landing />
    </section>
    <section id="work">
      <MyWork />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer/>
    </main>
    </div>
  )
}

export default App
