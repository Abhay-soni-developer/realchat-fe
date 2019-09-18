import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'

function StepCount({ currentStep, numberOfSteps, classes }) {

    return (
        <div className={classes.currentFrameCount}>
            {[...Array(numberOfSteps)].map((item, index) => {
                return <div className={index===currentStep?'active':''} key={index}></div>
            })}
        </div>
    )
}
export default withStyles(styles)(StepCount)
