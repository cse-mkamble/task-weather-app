import React, { useState, useContext } from 'react';
import { Box, Container, TextField, Button, Grid, Link, Typography } from '@mui/material';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Login() {
    AOS.init();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleSubmitLogin = e => {
        e.preventDefault();
        console.log(data.email, data.password);
    };

    return (<Box>
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
                    <Button
                        size='small'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 1 }}
                        disabled={data.email && data.password ? false : true}
                    > Login </Button>
                </Box>
                <Grid container justifyContent="center" >
                    <Grid item sx={{ mt: 3 }}>
                        <Link href="/register" variant="body2">
                            {"Don't have an account? Create Account"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>);
}
