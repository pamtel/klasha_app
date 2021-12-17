import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Button, makeStyles, Theme } from '@material-ui/core';

export const IOSSwitch = makeStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    backgroundColor: '#fff',
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: 'red',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    // border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#434a59',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}));

const Reminder = () => {
  const IOSSClass = IOSSwitch();

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });

 

  return (
    <div className="card dark">
      <div className="card-header">
        <h3>Reminder</h3>
      </div>

      <div className="d-flex align-items-center switch-con">
        <div>
          <Switch
            focusVisibleClassName={IOSSClass.focusVisible}
            disableRipple
            checked={state.checkedA}
            onChange={() => {}}
            name="checkedA"
            classes={{
              root: IOSSClass.root,
              switchBase: IOSSClass.switchBase,
              thumb: IOSSClass.thumb,
              track: IOSSClass.track,
              checked: IOSSClass.checked,
            }}
          />
        </div>
        <div className="ml-5">
          <small>Training session 10:00 am</small>
        </div>
      </div>

      <div className="d-flex align-items-center  switch-con">
        <div>
          <Switch
            focusVisibleClassName={IOSSClass.focusVisible}
            disableRipple
            checked={state.checkedB}
            onChange={() => {}}
            name="checkedB"
            classes={{
              root: IOSSClass.root,
              switchBase: IOSSClass.switchBase,
              thumb: IOSSClass.thumb,
              track: IOSSClass.track,
              checked: IOSSClass.checked,
            }}
          />
        </div>
        <div className="ml-5">
          <small>Team meetings 1:00 pm</small>
        </div>
      </div>

      <div className="action d-flex justify-content-center">
        <Button
          variant="contained"
          disableElevation
          className="btn btn-outline-green"
          style={{ marginTop: 20 }}
        >
          + Add new
        </Button>
      </div>
    </div>
  );
};

export default Reminder;
