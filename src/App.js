import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/project';

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={< Projects/>} />
      </Routes>
    </>
  );
}

export default App;
