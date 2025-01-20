import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/projects/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
