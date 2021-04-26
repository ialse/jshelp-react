import useStyles from '../../utils/myHooks';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function ButtonLink({ url }) {
  const classes = useStyles();

  return (
    <a href={url} className="block__link" target="blank">
      <Button variant="contained" color="primary" endIcon={<SendIcon />} className={classes.button}>
        Подробнее
      </Button>
    </a>
  );
}

export default ButtonLink;
