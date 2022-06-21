import React from 'react';
import './style/App.css';
import TomSmith from './components/TomSmith';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
 
function App() {
  return (
    <>
      <TomSmith />
      <TechStack />
      <Projects />
    </>
    
  );
}

export default App;
