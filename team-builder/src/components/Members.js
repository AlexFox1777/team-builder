import React from 'react'
import styled from "styled-components"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);


function Members(props) {
    const classes = useStyles();

    const editMember = (member) =>{
        console.log("data from member  - ", member);
        // event.preventDefault();
        props.memberToEdit(member);
    };

    return (

        <Grid container spacing={4} justify="center">
            <Grid item xs={12}> <Typography >Members: </Typography><hr /></Grid>
            {props.member.map((person, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography>Name: {person.name} </Typography>
                                <Typography>Email: {person.email} </Typography>
                                <Typography>Role: {person.role} </Typography>
                            </CardContent>
                                <ColorButton onClick={() => editMember(person)} color="primary"  variant="contained" className={classes.margin}>
                                    Edit
                                </ColorButton>
                        </Card>
                </Grid>
            ))
            }


        </Grid>
    )
}

export default Members;