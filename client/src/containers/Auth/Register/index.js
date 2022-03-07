import React, { useState } from 'react';
import { Box, Container, TextField, Button, Grid, Link, FormControlLabel, Checkbox, Typography, FormControl, MenuItem, InputLabel, Select } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Register() {
    AOS.init();

    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        cf_password: '',
        user_role: 0,
    });

    const [show_password, setShowPassword] = useState('password');

    const handleSubmitRegister = e => {
        e.preventDefault();
        console.log(data);
    };

    return (<Box>
        <Container maxWidth="xs">
            <Box data-aos="fade-right" sx={{ my: 2, p: 2, boxShadow: 2, borderRadius: 1, background: '#fefcfe' }}>
                <Typography component='h3' variant='h6' textAlign='center'>Create Account</Typography>
                <Box component="form" onSubmit={handleSubmitRegister} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={alert.fullname ? true : false}
                                helperText={alert.fullname ? alert.fullname : ''}
                                size="small"
                                autoComplete="given-full-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                autoFocus
                                onChange={(e) => {
                                    setData({ ...data, name: e.target.value });
                                }}
                                value={data.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={alert.username ? true : false}
                                helperText={alert.username ? alert.username : ''}
                                size="small"
                                required
                                fullWidth
                                id="username"
                                label="username"
                                name="username"
                                autoComplete="user-name"
                                onChange={(e) => {
                                    setData({ ...data, username: e.target.value });
                                }}
                                value={data.username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={alert.email ? true : false}
                                helperText={alert.email ? alert.email : ''}
                                size="small"
                                required
                                fullWidth
                                id="email"
                                label="email"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => {
                                    setData({ ...data, email: e.target.value });
                                }}
                                value={data.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">User Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.user_role}
                                    label="User Role"
                                    onChange={(e) => {
                                        setData({ ...data, user_role: e.target.value });
                                    }}
                                >
                                    <MenuItem value={0}>user</MenuItem>
                                    <MenuItem value={1}>admin</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={alert.password ? true : false}
                                helperText={alert.password ? alert.password : ''}
                                size="small"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={show_password}
                                id="password"
                                autoComplete="new-password"
                                onChange={(e) => {
                                    setData({ ...data, password: e.target.value });
                                }}
                                value={data.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={alert.cf_password ? true : false}
                                helperText={alert.cf_password ? alert.cf_password : ''}
                                size="small"
                                required
                                fullWidth
                                name="cf_password"
                                label="Confirm Password"
                                type={show_password}
                                id="cf_password"
                                autoComplete="new-confirm_password"
                                onChange={(e) => {
                                    setData({ ...data, cf_password: e.target.value });
                                }}
                                value={data.cf_password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox size='small' value={show_password} color="primary" onClick={(event => { if (show_password === 'password') { setShowPassword('text') } else { setShowPassword('password') } })} />}
                                label="Show Password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Login Now
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </Box>);
}
