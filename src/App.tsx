import React from 'react';
import './style/css/App.css';
import TomSmith from './components/TomSmith';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
 
function App() {
  return (
    <>
      <TomSmith />
      <TechStack />
      <Projects/>
      <Contact />
    </>
    
  );
}

export default App;
