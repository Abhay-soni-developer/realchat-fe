import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Link as RouterLink } from 'react-router-dom'
import { Toolbar, Link, Typography, withStyles } from '@material-ui/core'
import styles from './styles'

Navbar.defaultProps = {
    navbarTitle: 'onepirate',
    links: {}
}


function Navbar(props) {
    const { classes } = props
    return (
        <AppBar
            position='fixed'
            elevation={0}
            color='inherit'
            classes={{ root: classes.navbar }}
        >
            <Toolbar>
                <div style={{ flex: '1', display: 'flex', position: 'relative', justifyContent: 'flex-end' }}>
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
                        <Link component={RouterLink} to='/' underline='none'>
                            <Typography
                                variant='h4'
                                color='inherit'
                                align='center'
                                classes={{ root: classes.logo }}
                            >
                                {props.navbarTitle}
                            </Typography>
                        </Link>
                    </div>

                    {props.links.map( link=>{
                        return (
                        <div key={link.title}>
                        <Link component={RouterLink} to={link.location} underline='none'>
                            <Typography
                                variant='h6'
                                color={link.type}
                                align='center'
                                classes={{ root: classes.links, colorPrimary: classes.primaryLinks, colorSecondary: classes.secondaryLinks }}
                            >
                                {link.title}
                            </Typography>
                        </Link>
                    </div>
                    )
                    })}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Navbar)