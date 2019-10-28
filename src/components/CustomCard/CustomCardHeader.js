import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Typography from '@material-ui/core/Typography'


const styles = theme=>createStyles({
    title: {
        fontSize: '42px',
        textTransform: 'uppercase',
        fontWeight: 700,
        marginBottom: '10px'
    },
    underline: {
        width: '20%',
        height: '4px',
        margin: 'auto',
        backgroundColor: theme.colors.secondaryColor,
        marginBottom: '10px'
    },
    subheader: {
        fontSize: '14px',
        fontWeight: 400,
        color: theme.colors.secondaryTextColor
    }    
})

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


export default withStyles(styles)(CustomCardHeader)
