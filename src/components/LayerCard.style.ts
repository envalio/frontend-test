import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    maxWidth: '229px',
    maxHeight: '150px',
    border: '1px solid #EEEEEE',
    borderRadius: '10px',
    padding: 0,
    "&:hover": {
      border: '1px solid #21B6A8',
    },
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    borderRadius: '10px 10px 0 0',
  },
  formControl: {
    boxSizing: 'border-box',
    padding: '4px',
    paddingLeft: theme.spacing(2.5),
  },
}))