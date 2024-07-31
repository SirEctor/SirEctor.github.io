import { Link } from "react-router-dom"
import { Button, TextField } from "@mui/material";





function Contact(){
    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="App-header" sx={{ m: 1, minWidth: 120, flex: 1}}>
            <form style={{display: "flex", flexDirection: "column"}} onSubmit={(e) => handleSubmit(e)}>
            Submit inquiries here. Thank you!
            <TextField sx={{flex: 1,mt: 2,  background: "white"}}></TextField>
            <Button type="submit" sx={{flex: 1, mt: 2}}>Submit</Button>
            </form>
            
            <Button variant="outlined"  sx={{mt: 2, color: "darkGray"}}  component={Link} to='/'>Home</Button>
        </div>
    )
}

export default Contact;