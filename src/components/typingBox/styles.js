import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '600px',
        padding: '10px',
        marginBottom: '20px',
    },
    card_header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    timer: {
        fontWeight: 600,
        fontSize: '18px',
        color: '#2a8fb4',
    },
    closeIcon: {
        cursor: 'pointer',
    },
    input: {
        padding: '15px',
    },
    paper: {
        padding: '10px',
    },
    
    highlight: {
        color: '#2a8fb4',
    },
    error: {
        backgroundColor: 'lightcoral',
        border: 'red',
    },
    typedWords: {
        color: '#333',
    }
}));

export default useStyles;