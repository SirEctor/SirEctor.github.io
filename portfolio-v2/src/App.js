import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Button } from "@mui/material";


function restOfAppPage(){
  return(
    <div className="App-header" sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large">About</Button>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large">Skills</Button>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large">Projects</Button>
      <Button variant="outlined"  sx={{mt: 2, color: "darkGray", fontSize:"4vw"}}  size="large">Contact</Button>
      <h6 sx={{mt: 2}} style={{color: "#a9a9a9"}}>Created by E. Teshome (2024)</h6>
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
