import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

let styles = theme => createStyles({
    currentFrameCount: props => ({

        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,

        '&>div': {
            height: 12,
            width: 12,
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: `1px solid ${theme.colors.secondaryTextColor}`,
            margin: '0px 5px',
            transitionDuration: '0s',
            ...props.stepStyle
        },

        '&>.active': {
            backgroundColor: `${theme.colors.bgColor3}`,
            transform: 'rotateX(180deg)',
            transitionDuration: '1s',
            ...props.activeStepStyle
        }

    })
})

Steppers.propTypes = {
    currentStep: PropTypes.number.isRequired,
    numberOfSteps: PropTypes.number.isRequired,
    activeStepStyle: PropTypes.object,
    stepStyle: PropTypes.object
}

Steppers.defaultProps = {
    activeStepStyle: {},
    stepStyle: {}
}

function Steppers({ currentStep, numberOfSteps, activeStepStyle, stepStyle, classes }) {

    return (
        <div className={classes.currentFrameCount}>
            {[...Array(numberOfSteps)].map((item, index) => {
                return <div className={index === currentStep ? 'active' : ''} key={index}></div>
            })}
        </div>
    )
}

export default withStyles(styles)(Steppers)