import { Link } from "react-router-dom"
import { Button, TextField } from "@mui/material";


function Contact(){
    return(
        <div className="App-header" sx={{ m: 1, minWidth: 120, flex: 1}}>
            <h6 sx={{flex: 1}}>THIS IS THE CONTACT PAGE</h6>
            <form style={{display: "flex", flexDirection: "column"}}>
            Submit inquiries here. Thank you!
            <TextField sx={{flex: 1,mt: 2,  background: "white"}}></TextField>
            <Button type="submit" sx={{flex: 1, mt: 2}}>Submit</Button>
            </form>
            
            <Button variant="outlined"  sx={{mt: 2, color: "darkGray"}}  component={Link} to='/'>Home</Button>
        </div>
    )
}

export default Contact;