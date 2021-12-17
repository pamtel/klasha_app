import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const sideStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: '20px',
      color: '#fff',
      padding: theme.spacing(3, 0),
      fontWeight: 700,
      fontSize: theme.typography.fontSize * 1.5,
      cursor: 'pointer',
    },
  })
);
