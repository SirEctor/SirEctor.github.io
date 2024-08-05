import { Button, Stack, Typography, Box, makeStyles } from "@mui/material";
import { borders } from '@mui/system';
import { useEffect, useState } from "react";



function ProjectDisplay({ projectType, pclassName, projectName, link, desc, skills } ){
    const commonStyles = {
        bgcolor: 'black',
        borderColor: 'text.primary',
        m: 1,
        padding: 1,
        border: 1
      };

    const [splitSkills, setSplitSkills] = useState([])

    function handleButton(event){
        event.preventDefault();
        window.open(link, '_blank').focus();
    }


    useEffect(() => {
        setSplitSkills(skills.split("/"))
    }, [])


    return(
        <Stack direction="column" align="center" alignItems="center" spacing={4} sx={{display:"flex"}}>
            <Typography variant="h3" gutterBottom>Type: {projectType}</Typography>
            <Typography variant="h4" gutterBottom>{pclassName ? <>{pclassName}</> : <></>}</Typography>
            <Typography variant="h5" gutterBottom>{projectName}</Typography>
            <Typography variant="h6" gutterBottom>{desc}</Typography>
            <Typography variant="caption" gutterBottom>Skills:<Stack direction="row" align="center" alignItems="center" spacing={1} sx={{display:"flex", mt: 1}}>{splitSkills.map((skill, index) => (<Box key={index} sx={{ ...commonStyles, borderRadius: '16px' }}>{skill}</Box>))}</Stack></Typography>
            <Button variant="outlined" onClick={(e) => handleButton(e)}>CHECK IT OUT</Button>
        </Stack>
    )
}

export default ProjectDisplay;