import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Card from '@material-ui/core/Card'

const styles = theme => createStyles({
    card: {
        backgroundColor: theme.card.bgColor,
        marginBottom: 100,
        marginTop: 60,
        padding: '64px 48px',
        boxSizing: 'border-box',
        minHeight: '90px',
        maxWidth: '550px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

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