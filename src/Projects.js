import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ProjectDisplay from "./ProjectDisplay.js";
import Stack from '@mui/material/Stack';
import Papa from 'papaparse';
import { useState, useEffect } from "react";

function Projects(){
    const [projects, setProjects] = useState([])
    const [currentProjectNum, setCurrentProjectNum] = useState(0)
    const [currentProjectType, setCurrentProjectType] = useState('')
    const [currentClassName, setClassName] = useState('')
    const [currentProjectName, setCurrentProjectName] = useState('')
    const [currentProjectLink, setCurrentProjectLink] = useState('')
    const [currentProjectDescription, setCurrentProjectDescription] = useState('')



    async function getDataFromCSV(filePath, variableFunc){
        const resp = await fetch(filePath);
        const reader = resp.body.getReader();
        const result = await reader.read();
        const d = new TextDecoder('utf-8');
        const csv = d.decode(result.value);
    
        const results = Papa.parse(csv, {header: true});
        const rows = results.data;
       
        variableFunc(rows);
    }

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
                    <ProjectDisplay key={index} projectType={project.PROJECTTYPE} pclassName={project.CLASSNAME} projectName={project.PROJECTNAME} link={project.LINK} desc={project.DESCRIPTION} />   : <></> 
                )) : "LOADING"}
                <IconButton aria-label="arrowright" onClick={handleRight}>
                    <ArrowRightIcon color="primary"  sx={{ fontSize: 100 }} />
                </IconButton>
            </Stack>
            
            <Button variant="outlined"  sx={{mt: 2, color: "darkGray"}}  component={Link} to='/'>Home</Button>
        </div>
    )
}

export default Projects;