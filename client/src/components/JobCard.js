import React from 'react'
import {Card,CardHeader, CardMedia,CardActions, CardContent, Avatar,Button,Typography, makeStyles} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './JobCard.css'

export default function JobCard({job}){

    return(
        <Card id={job.id} variant="outlined" mt={5} mr={4}>
           <CardHeader
            avatar={
            <Avatar aria-label="recipe" src={job.company_logo_url}>R</Avatar>
            }
            title= {job.company_name}
            subheader={'Update '+job.publication_date.substring(0,10)}
      />
            <CardMedia
            image={job.company_logo_url}
            title="Paella dish"
            />
            <CardContent>
                <Typography>
                {job.title}
                </Typography>
                <Typography variant="body2" component="p">
                <AccessTimeIcon></AccessTimeIcon>
                {job.job_type}
                <AttachMoneyIcon></AttachMoneyIcon>
                {job.salary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="secondary" size="small" href={job.url} target="_blank">Learn More</Button>
            </CardActions>
        </Card>
    )

}