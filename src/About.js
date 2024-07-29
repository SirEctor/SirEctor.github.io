import { Link } from "react-router-dom"
import { Button, Typography, Grid } from "@mui/material";


function About(){
    return(
        <>
            <title>About</title>
            <div className="App-header">
                <Grid display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h6" sx={{  minWidth: 120 }}>
                        An idealist aiming to design the future of ubiquitous tech through software and programming.
                    </Typography>
                </Grid>
                <Button variant="outlined"  sx={{mt: 2,  color: "darkGray"}}  component={Link} to='/'>Home</Button>
            </div>
        </>
        
    )
}

export default About;