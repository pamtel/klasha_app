import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const buttonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.design.colors.grey,
    },
    button: {
      padding: 0,
      height: '40px',
      width: 'auto',
    },
  })
);