import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './style'

function CustomCardHeader( props) {
    const {classes}=props
    return (
        <div>
            <Typography variant='h3' gutterBottom align='center' classes={{ root: classes.title }} {...props.titleProps}>
                {props.title}
            </Typography>
            <div className={classes.underline} {...props.underlineProps}></div>
            <Typography variant='body2' gutterBottom align='center' classes={{ root: classes.subheader }} {...props.subheaderProps}>
                {props.subheader}
            </Typography>
        </div>
    )
}

CustomCardHeader.defaultProps = {
    title: 'Title',
    subheader: 'Subheader',
    titleProps: {},
    underlineProps: {},
    subheaderProps: {}
}




export default withStyles( styles)(CustomCardHeader)
