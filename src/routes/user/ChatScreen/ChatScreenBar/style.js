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

    iconButton: {
        marginRight: '5px'
    },

    icon: {
        fontSize: '1.8rem',
        color: 'white'
    },

    friendNameContainer: {
        width: '400px',

        '@media(max-width: 1200px)': {
            width: '300px'
        },

        '@media(max-width: 992px)': {
            width: '200px'
        }
    }
})

export default style