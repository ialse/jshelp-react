import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#0059b2',
  },
  table: {
    backgroundColor: '#FAF8F7',
  },
  cell: {
    whiteSpace: 'nowrap',
  },
}));

export default useStyles;
