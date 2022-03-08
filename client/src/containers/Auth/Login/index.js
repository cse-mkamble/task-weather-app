import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Container, TextField, Button, Grid, Link, Toolbar, Typography } from '@mui/material';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AOS from 'aos';

import { loginReq } from "../../../redux/actions/authAction";

import 'aos/dist/aos.css';

export default function Login() {
    AOS.init();
    const history = useHistory();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleSubmitLogin = async e => {
        e.preventDefault();
        setData({ ...data });
        try {
            let responseData = await loginReq(data);
            if (responseData.error) {
                setData({ ...data, error: responseData.error, password: "", });
            } else if (responseData.token) {
                setData({ email: "", password: "", error: false });
                localStorage.setItem("jwt", JSON.stringify(responseData));
                history.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (<Box>
        <Toolbar>
            <Typography component='h3' variant='h4' sx={{ m: 'auto' }}>Weather App</Typography>
        </Toolbar>
        <Container maxWidth="xs">
            <Box data-aos="zoom-out" sx={{ my: 2, p: 2, boxShadow: 2, borderRadius: 1, background: '#fefcfe' }}>
                <Typography component='h3' variant='h6' textAlign='center'>Login</Typography>
                <Box component="form" onSubmit={handleSubmitLogin} noValidate sx={{ mt: 1 }}>
                    <TextField
                        size='small'
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                        }}
                        value={data.email}
                    />
                    {!data.error ? "" : <Typography fontSize='small' color="error" >{data.error}</Typography>}
                    <TextField
                        size='small'
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                        }}
                        value={data.password}
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    {!data.error ? "" : <Typography fontSize='small' color="error" >{data.error}</Typography>}
                    <Button
                        size='small'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 1 }}
                        disabled={data.email && data.password ? false : true}
                    > Login </Button>
                </Box>
                <Grid container justifyContent="center" >
                    <Grid item sx={{ mt: 4 }}>
                        <Button onClick={() => history.push("/register")}>
                            {"Don't have an account? Create Account"}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>);
}
