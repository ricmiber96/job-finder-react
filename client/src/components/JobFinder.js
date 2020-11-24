import {React, useState} from 'react'
import {Box,Container,AppBar,Typography,Grid,TextField,Button, Toolbar} from '@material-ui/core';
import './JobFinde.css'

export default function JobFinder(){
    const axios = require('axios')
    const [query, setQuery] = useState();
    const [location, setLocation] = useState('New York');
    const [jobs, setJobs] = useState();

    const searchJobs = async(e) =>{
        e.preventDefault()
       
        if(jobs !== '' && location !== ''){
        const url = `https://indreed.herokuapp.com/api/jobs?q=${query}&l=${location}`
        
            axios.get(url)
            .then(function(response){
            })
            .catch(function(error) {
                console.log(error);
            });
    
        }
    }

    return(
    <Box width={1}>
        <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className="title">
        Job Finder
        </Typography>
        </Toolbar>
        </AppBar>
        <Grid item lg={12}>
            <form className="form-job" noValidate autoComplete="off" onSubmit={searchJobs}>
                <Container lg={6}>

                <TextField 
                    id="standard-basic" 
                    label="What"
                    type="text"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)} />

                <TextField 
                    id="standard-basic" 
                    label="Where"
                    type="text"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}/>

                    <Button className="buttonSearch" type="submit" mt={5} ml={2} variant="outlined" color="primary"> Search</Button>
                    <Button className="buttonAdvanced" mt={5} ml={2} variant="outlined"> Advanced Search</Button>
                </Container>
            </form>
        </Grid>
    </Box>
    )
}