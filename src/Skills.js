import { Link } from "react-router-dom"
import { Button, Box, Stack } from "@mui/material";
import { commonStyles } from "./Utilities.js";
import { getDataFromCSV } from "./Utilities.js";
import { useState, useEffect } from "react";
function Skills(){
    const [allSkills, setAllSkills] = useState([]);
    
    useEffect(() => {
        getDataFromCSV('./skills.csv', setAllSkills)
    }, [])

    return(
        <div className="App-header" sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
            <Stack direction="column" align="center" alignItems="center" spacing={1} sx={{ display:"flex", mt: 2 }}>
                {allSkills ? allSkills.map((skill, index) => {
                    return(<Box key={index} sx={{ ...commonStyles, borderRadius: '16px' }}>{skill.SKILL}</Box>)
                }): "LOADING"}
            </Stack>         
            <Button variant="outlined"  sx={{mt: 2, color: "darkGray", ':hover': {transform: "scale(1.25)"}}}  component={Link} to='/'>Home</Button>
        </div>
    )
}

export default Skills;