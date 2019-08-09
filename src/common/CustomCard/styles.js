import { createStyles} from '@material-ui/core'

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

export default styles