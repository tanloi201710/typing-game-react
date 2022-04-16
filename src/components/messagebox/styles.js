import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    msgContainer: {
        position: 'absolute',
        top: 0,
        left: '25%',
        zIndex: 999,
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));

export default useStyles;