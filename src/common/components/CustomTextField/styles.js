import { createStyles} from '@material-ui/core'

const style = theme => createStyles({
    field: {
        marginTop: '4px'
    },

    inputField: {
        borderRadius: '0px',
        border: `1px solid ${theme.colors.primaryBorderColor}`,
        transitionDuration: '0.25s',
        '&:hover': {
            borderColor: `${theme.colors.secondaryColor}`,
        },
        '&::after': {
            display: 'none'
        },
        '&::before': {
            display: 'none'
        }
    },

    inputStyle: {
        backgroundColor: 'white',
        padding: '20px',
        fontSize: '1.2rem',
    },

    container: {
        marginTop: 20
    }
})

export default style