import Header from '../components/layout/Header';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Contact from '../sections/Contact';
import Footer from '../components/layout/Footer';
import Preloader from '../components/ui/Preloader';
import '../styles/globals.css';

function App() {
  return (
    <>
      <Preloader />
      <div className="app">
        <Header />
        <main className="main-content">
          <section id="hero"><Hero /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="experience"><Experience /></section>
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
