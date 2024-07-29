import { Link } from "react-router-dom"
import { Button } from "@mui/material";


function Projects(){
    return(
        <div className="App-header" sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
            THIS IS THE Projects PAGE
            <ul>
                <li><a>Muse2</a></li>
                <li><a>SpeciesTrackr</a></li>
                <li><a>Feel The Beat!</a></li>
            </ul>
            <Button variant="outlined"  sx={{mt: 2, color: "darkGray"}}  component={Link} to='/'>Home</Button>
        </div>
    )
}

export default Projects;