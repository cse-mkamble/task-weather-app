import React from 'react';
import { Box, Link, Toolbar, Button } from '@mui/material';
import { logout, isAuthenticate, isAdmin } from "../../redux/actions/authAction";

export default function Head() {
    if (isAuthenticate() && isAdmin()) {
        return (<Toolbar>
            <Link color="inherit" underline='none' href="/" sx={{ marginRight: '20px' }}>
                Home
            </Link>
            <Link color="inherit" underline='none' href="/admin/dashboard" >
                Admin
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Button
                size='small'
                variant="link"
                onClick={() => logout()}
                sx={{}}
            >logout</Button>
        </Toolbar>)
    }
    if (isAuthenticate() && !isAdmin()) {
        return (<Toolbar>
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
        </Toolbar>)
    }
}
