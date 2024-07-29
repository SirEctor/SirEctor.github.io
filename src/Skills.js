import { Link } from "react-router-dom"
import { Button } from "@mui/material";


function Skills(){
    return(
        <div className="App-header" sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
            THIS IS THE SKILLS PAGE
            <ul>
                <li>Python</li>
                <li>Scala</li>
                <li>Java</li>
                <li>SQL (Postgres)</li>
                <li>R</li>
                <li>JavaScript</li>
                <li>GraphQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Cypress</li>
                <li>Node.js</li>
                <li>Flask</li>
                <li>Material-UI</li>
                <li>Git</li>
                <li>Docker</li>
                <li>VS Code</li>
                <li>Visual Studio</li>
                <li>PyCharm</li>
                <li>IntelliJ</li>
                <li>AWS</li>
                <li>Google Cloud Platform</li>
                <li>Figma</li>
                <li>Redux</li>
                <li>pandas</li>
                <li>NumPy</li>
            </ul>
            <Button variant="outlined"  sx={{mt: 2, color: "darkGray"}}  component={Link} to='/'>Home</Button>
        </div>
    )
}

export default Skills;