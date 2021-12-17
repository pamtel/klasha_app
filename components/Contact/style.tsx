import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const contactStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      padding: 0,
    },

    item: {
      padding: 0,
    },
  })
);