import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <main>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
