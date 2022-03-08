import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Link, Toolbar, Button, Typography } from '@mui/material';
import { logout, isAuthenticate, isAdmin } from "../../redux/actions/authAction";

export default function Head() {
    const history = useHistory();

    if (isAuthenticate() && isAdmin()) {
        return (<Box>
            <Toolbar>
                <Typography component='h3' variant='h4' sx={{ m: 'auto' }}>Weather App</Typography>
            </Toolbar>
            <Toolbar>
                <Button
                    size='small'
                    variant="link"
                    onClick={() => history.push("/")}
                    sx={{ marginRight: '20px' }}
                >home</Button>
                <Button
                    size='small'
                    variant="link"
                    onClick={() => history.push("/admin/dashboard")}
                >Admin</Button>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    size='small'
                    variant="link"
                    onClick={() => logout()}
                >logout</Button>
            </Toolbar>
        </Box>)
    }
    if (isAuthenticate() && !isAdmin()) {
        return (<Box>
            <Toolbar>
                <Typography component='h3' variant='h4' sx={{ m: 'auto' }}>Weather App</Typography>
            </Toolbar>
            <Toolbar>
                <Link color="inherit" underline='none' href="/">
                    Home
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    size='small'
                    variant="link"
                    onClick={() => logout()}
                    sx={{}}
                >logout</Button>
            </Toolbar>
        </Box>)
    }
}
