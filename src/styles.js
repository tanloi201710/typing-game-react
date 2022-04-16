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
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

export default useStyles;