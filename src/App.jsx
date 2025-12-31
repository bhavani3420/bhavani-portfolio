import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable custom cursor on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      document.body.classList.add('custom-cursor-active');
    }
  }, []);

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <AnimatedBackground />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Resume />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
