import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const dashStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#040415',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
    },

    aside: {
      padding: '20 0 20 0',
      width: '172px',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      height: '100vh',
    },

    main: {
      padding: 20,
      width: '100%',
      marginLeft: '172px',
      overflow: 'auto',
      position: 'relative',
    },
  })
);
