import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Link, Toolbar, Button } from '@mui/material';
import { logout, isAuthenticate, isAdmin } from "../../redux/actions/authAction";

export default function Head() {
    const history = useHistory();

    if (isAuthenticate() && isAdmin()) {
        return (<Toolbar>
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
            >home</Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button
                size='small'
                variant="link"
                onClick={() => logout()}
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
