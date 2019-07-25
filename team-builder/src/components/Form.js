import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '300px',
        margin: '3rem auto',
    },
    styledFiledSet: {
        boxShadow: '0 19px 38px rgba(0, 0, 0, 0.28), inset 0 15px 18px rgba(229, 229, 229, 0.22)',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(2),
        width: '8rem',
    },
}));


function Form(props) {
    const classes = useStyles();


    const [member, setMember] = React.useState({});
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value});
        console.log(event.target.name, " - ",  event.target.value);
        console.log("member ", member)
    };
    const handleSubmit = (event) =>{
        console.log("data from  - ", member);
        event.preventDefault();
        if(isEditing){
            props.setMember(member)
            setIsEditing(false);
        } else props.addToListOfMembers(member);
    };
    useEffect(() =>{
        console.log("Form got the member - ", props.memberToEdit);
        setMember(props.memberToEdit);
        setIsEditing(true);
        console.log("This is member for editing - ", member)
    }, [props.memberToEdit]);
    return (
        <form  onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
            <fieldset className={classes.styledFiledSet}>
                <legend >Member Form</legend>
                <TextField
                    id="outlined-name"
                    label="Name"
                    name="name"
                    value={member.name}
                    className={classes.textField}
                    type={member.name}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    name= "email"
                    value={member.email}
                    className={classes.textField}
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    type={member.email}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-role"
                    label="Role"
                    name= "role"
                    value={member.role}
                    className={classes.textField}
                    type={member.role}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    Submit
                </Button>
            </fieldset>
        </form>
    )
}

export default Form;