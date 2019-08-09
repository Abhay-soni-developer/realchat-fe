import { createStyles} from '@material-ui/core'

const styles = theme=>createStyles({
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
    }    
})

export default styles