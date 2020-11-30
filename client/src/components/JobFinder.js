import {React, useState} from 'react'
import {Box,Container,AppBar,Typography,Grid,TextField,Button, Toolbar} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import './JobFinder.css'
import JobCard from './JobCard';
import WorkIcon from '@material-ui/icons/Work';

export default function JobFinder(){
    const axios = require('axios')
    const [query, setQuery] = useState('programmer');
    const [location, setLocation] = useState('New York');
    const [page, setPage] = useState(1)
    const [jobs, setJobs] = useState([]);

    const searchJobs = async(e) =>{
        e.preventDefault()
       
        if(jobs !== '' && location !== ''){
            const url = `https://remotive.io/api/remote-jobs?limit=4`
            
                axios.get(url)
                .then(function(response){
                    console.log(response.data.jobs);
                    setJobs(response.data.jobs)
                })
                .catch(function(error) {
                    console.log(error);
                });
        
        }
    }

    const handleChange = ()=>{
        
    }

    return(
    <Box width={1}>
        <AppBar position="static">
        <Toolbar>
        <WorkIcon></WorkIcon>
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
                    label="Job"
                    type="text"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)} />

                <TextField 
                    id="standard-basic" 
                    label="Where"
                    type="text"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}/>

                
                    <Button className="buttonSearch" type="submit" mt={5} variant="outlined" color="primary"> Search</Button>                 
                    <Button className="buttonAdvanced" mt={5}  variant="outlined"> Advanced Search</Button>
                              
                    <div style={{ marginTop: 20, padding: 30 }}>
                    <Grid container spacing={8} direction="row" justify="space-evenly" alignItems="center" >
                    
                    {jobs.map(job=>(
                    <Grid item key={job.id} xs={3}>
                        <JobCard job={job} key={job.id}></JobCard>
                    </Grid>
                    ))}
                    </Grid>
                    </div>
                    <Grid container alignItems="center">
                    </Grid>

                </Container>
            </form>
            <Box m="auto">
                <Pagination page={page} onChange={handleChange} className="pagination-job" count={10} mt={5} variant="outlined" color="primary" />
            </Box>
        </Grid>
    </Box>
    )
}