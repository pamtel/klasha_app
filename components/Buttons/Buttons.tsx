import React from 'react'
import { buttonStyles } from "./style";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export const Buttons = () => {
  const classes = buttonStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
  );
}
