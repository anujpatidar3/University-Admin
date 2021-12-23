import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import TextField from "@material-ui/core/TextField";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import '../CSS/authentication.css'

const SignUp = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [name,setName]=useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Box sx={{ flexGrow: 1 }} className="signinpage">
            <Grid container columnSpacing={{ xs: 0, sm: 2, md: 1 }}>
                <Grid item xs={12} sm={6} md={6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={8} className="signincard">
                        <Item>
                            <h2>Sign Up</h2>
                            <TextField
                                style={{ width: "80%" }}
                                required
                                type="text"
                                placeholder="Name"
                            />
                            <TextField
                                style={{ width: "80%" }}
                                required
                                type="email"
                                placeholder="E-mail"
                            />
                            <TextField
                                required
                                style={{ width: "80%" }}
                                type="password"
                                placeholder="Password"
                            />
                            <CardActions className="buttons">
                                <Button variant="contained" style={{ backgroundColor: "#000046", marginTop: "10px" }}>
                                    Sign Up
                                </Button>
                            </CardActions>
                            <CardActions className="buttons">
                                <Button component={Link} to='/signin' size="small">Already Have an Account?</Button>
                            </CardActions>
                        </Item>
                    </Paper>
                </Grid>
            </Grid>
        </Box>)
}

export default SignUp;

