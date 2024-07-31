import './App.css';
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom"
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import { Button } from "@mui/material";


function restOfAppPage(){
  return(
    <div className="App-header" sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large" component={Link} to='/about'>About</Button>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large" component={Link} to='/skills'>Skills</Button>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large" component={Link} to='/projects'>Projects</Button>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large" component={Link} to='/contact'>Contact</Button>
      <h6 sx={{mt: 2}} style={{color: "#a9a9a9"}}>Created by E. Teshome (2024)</h6>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={restOfAppPage()} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
