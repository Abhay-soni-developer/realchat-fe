import React from 'react'
import { withStyles, Card } from '@material-ui/core'
import styles from './styles'

const CustomCard = withStyles(styles)(function (props) {
    const { classes, children } = props
    return (
            <Card
                classes={{ root: classes.card }}
                square={true}
                elevation={0}
            >
                {children}
            </Card>
    )
})

CustomCard.defaultProps = {
}

export default CustomCard;