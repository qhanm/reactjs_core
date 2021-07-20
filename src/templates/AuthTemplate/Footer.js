import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Footer extends Component {
    render() {
        return (
            <Typography position="static" variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https:/qhn.dev.com/">
                    QHN Draw Diagram
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
}

export default Footer;