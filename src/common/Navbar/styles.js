import { createStyles} from '@material-ui/core'

const styles = theme => createStyles({
    navbar: {
        backgroundColor: theme.navbar.bgColor,
    },
    logo: {
        fontSize: '24px',
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#fff'
    },
    links: {
        fontSize: '16px',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginRight: '16px'
    },
    primaryLinks: {
        color: theme.navbar.primaryLinkColor,
    },
    secondaryLinks: {
        color: theme.navbar.secondaryLinkColor,
    }
})

export default styles