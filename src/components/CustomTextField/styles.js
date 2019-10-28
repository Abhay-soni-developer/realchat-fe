import { createStyles} from '@material-ui/core'

const style = theme => createStyles({
    field: {
        marginTop: '4px'
    },

    inputField: {
        borderRadius: '0px',
        border: theme.fields.border,
        transitionDuration: '0.25s',
        '&:hover': {
            border:  `${theme.fields.onHoverBorder}`,
        },
        '&::after': {
            display: 'none'
        },
        '&::before': {
            display: 'none'
        }
    },

    inputStyle: {
        backgroundColor: `${theme.fields.inputFieldBackgroundColor}`,
        padding: '20px',
        fontSize: '1.2rem',
    },

    container: {
        marginTop: 20
    }
})

export default style