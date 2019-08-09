import { createStyles} from '@material-ui/core'

const style = theme => createStyles({
    title: {
        fontSize: '42px',
        textTransform: 'uppercase',
        fontWeight: 700,
        marginBottom: '10px'
    },

    underline: {
        width: '20%',
        height: '4px',
        margin: 'auto',
        backgroundColor: theme.colors.secondaryColor,
        marginBottom: '10px'
    },

    subheader: {
        fontSize: '14px',
        fontWeight: 400
    },

    h6: {
        marginTop: '20px'
    },

    formContainer: {
        marginTop: '50px'
    },
    btnStyle: {
        marginTop: '25px',
        borderRadius: '0px',
        backgroundColor: theme.colors.secondaryColor,
        padding: '20px 5px',
        boxSizing: 'border-box',
        height: '60px',
        fontWeight: 700,
        color: 'white',
        '&:hover': {
            backgroundColor: '#e62958'
        }
    }
})

export default style