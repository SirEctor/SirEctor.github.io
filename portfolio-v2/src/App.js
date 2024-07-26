import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function restOfAppPage(){
  return(
    <div className="App-header">
      <h1>About</h1>
      <h1>Skills</h1>
      <h1>Projects</h1>
      <h1>Contact</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={restOfAppPage()} />
      </Routes>
    </Router>
  );
}

export default App;
