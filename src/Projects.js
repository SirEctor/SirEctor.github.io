import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ProjectDisplay from "./ProjectDisplay.js";
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";
import { getDataFromCSV } from "./Utilities.js";

function Projects(){
    const [projects, setProjects] = useState([])
    const [currentProjectNum, setCurrentProjectNum] = useState(0)

    useEffect(() => {
        getDataFromCSV('./projects.csv', setProjects)
    }, [])

    function handleRight(){
        if(currentProjectNum < projects.length - 1){
            setCurrentProjectNum(num => num + 1)
        }
    }

    function handleLeft(){
        if(currentProjectNum > 0){
            setCurrentProjectNum(num => num - 1)
        }
    }
    
    return(
        <div className="App-header" sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="arrowleft" onClick={handleLeft}>
                    <ArrowLeftIcon color="primary" sx={{ fontSize: 100 }} />
                </IconButton>
                {projects ? projects.map((project, index) => (
                    index === currentProjectNum ?
                    <ProjectDisplay key={index.toString() + "-project"} projectType={project.PROJECTTYPE} pclassName={project.CLASSNAME} projectName={project.PROJECTNAME} link={project.LINK} desc={project.DESCRIPTION} skills={project.SKILLS} />   : <></> 
                )) : "LOADING"}
                <IconButton aria-label="arrowright" onClick={handleRight}>
                    <ArrowRightIcon color="primary"  sx={{ fontSize: 100 }} />
                </IconButton>
            </Stack>
            
            <Button variant="outlined"  sx={{mt: 2, color: "darkGray", bottom: 0, mb: 2, ':hover': {transform: "scale(1.25)"} }}  component={Link} to='/'>Home</Button>
        </div>
    )
}

export default Projects;