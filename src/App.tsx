import React from 'react';
import './style/App.css';
import TomSmith from './components/TomSmith';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import projects from "./data/projects"
 
function App() {
  return (
    <>
      <TomSmith />
      <TechStack />
      <Projects projects={projects}/>
    </>
    
  );
}

export default App;
