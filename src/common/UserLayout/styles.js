import { createStyles} from '@material-ui/core'

const style = theme => createStyles({
    bgContainer: {
        height: '100vh'
    },

    bgDesignPart1: {
        height: '15%',
        backgroundColor: theme.colors.secondaryColor
    },

    bgDesignPart2: {
        height: '100%',
        backgroundColor: theme.userAccountTheme.bgColor
    },

    dialogContainer: {
        backgroundColor: 'transparent'
    },

    paper: {
        maxHeight: 'calc(100% - 40px)',
        height: '100%',
        backgroundImage: theme.userAccountTheme.chatScreenBg,
        backgroundSize: 'contain'
    }

})

export default style