import React from 'react'
import { withStyles } from '@material-ui/styles'
import style from './styles'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'



function UserLayout (props) {
    const { classes } = props
    return (
        <>
            <div className={classes.bgContainer}>
                <div className={classes.bgDesignPart1}></div>
                <div className={classes.bgDesignPart2}></div>
            </div>

            <Dialog
                fullWidth
                open={true}
                transitionDuration={2}
                PaperProps={{elevation: 2, square: true}}
                TransitionComponent={Slide}
                maxWidth='lg'
                BackdropProps={{ invisible: true }}
                classes={{
                    container: classes.dialogContainer,
                    paper: classes.paper
                }}
            >
                {props.children}
            </Dialog>
        </>
    )
}

export default withStyles(style)(UserLayout)