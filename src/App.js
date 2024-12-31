import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/project';
import About from './components/about';
import Contact from './components/contact';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={< Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skills" element={<Skills/>} />


      </Routes>
    </>
  );
}

export default App;
