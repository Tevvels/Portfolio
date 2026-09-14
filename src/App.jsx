import Landing from "./pages/Landing.jsx";
import Contact from "./pages/Contact.jsx";
import MyWork from "./pages/MyWork.jsx";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Styles/General.css";
import "./Styles/Glass.css";
import "./Styles/Contact.css";
function App() {
  return (
    <div className="grid glass">
      <main className="portfolio-content-canvas glass-wrapper">
        <section id="landing">
          <Landing />
        </section>
        <section id="work">
          <MyWork />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
      </div>
  );
}

export default App;
