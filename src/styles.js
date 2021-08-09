import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f1f1f1',
    },
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
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        padding: '10px',
    },
    word: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        display: 'inline-block',
        margin: '5px 0',
    },
    highlight: {
        color: '#2a8fb4',
    },
    error: {
        backgroundColor: 'lightcoral',
        border: 'red',
    }
}));

export default useStyles;