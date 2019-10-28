import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'

const style = theme => createStyles({
    progressContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '50vh',
        alignItems: 'center'
    }
})

export default withStyles(style)(function (props) {
    const { classes } = props
    return (
        <div className={ classes.progressContainer}>
            <CircularProgress
                {...props}
                classes={{
                    root: classes.progressCircle
                }}
            />
        </div>
    )
})