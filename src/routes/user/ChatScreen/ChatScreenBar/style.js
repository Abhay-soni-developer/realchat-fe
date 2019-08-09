import { createStyles} from '@material-ui/core'


const style = theme => createStyles({
    appbar: {
        width: '100%',
        backgroundColor: theme.colors.bgColor1,
    },

    avatarContainer: {
        border: theme.userAccountTheme.avatarBorder,
        marginRight: 20,
    },

    flexRow: {
        display: 'flex',
        alignItems: 'center'
    },

    toolbarContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    icon: {
        fontSize: '1.8rem',
        marginLeft: '20px'
    }
})

export default style