import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import style from './style'
import { withStyles } from '@material-ui/core'

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