import { Button, Stack } from "@mui/material";

function ProjectDisplay({ projectType, pclassName, projectName, link, desc } ){
    
    return(
        <Stack direction="column" alignItems="center" spacing={1}>
            <h1>Type: {projectType}</h1>
            {pclassName ? <h3>{pclassName}</h3> : <></>}
            <h6>{projectName}</h6>
            <div>{desc}</div>
            <Button variant="outlined" href={link} sx={{ mt: 2 }}>CHECK IT OUT</Button>
        </Stack>
    )
}

export default ProjectDisplay;