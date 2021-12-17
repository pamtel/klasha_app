import React from 'react';
import { contactStyles } from './style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { ContactTypes } from '../../types';

const contactDetails: ContactTypes[] = [
  {
    name: 'Martins Black',
    team: 'Coach',
    img: '/martins.png',
  },
  {
    name: 'Jane Cooper',
    team: 'Manager',
    img: '/jane.png',
  },
  {
    name: 'Jacob Gate',
    team: 'Player',
    img: '/jacob.png',
  },
  {
    name: 'Albert Fox',
    team: 'Player',
    img: '/albert.png',
  },
];

export const Contact = () => {
  const classes = contactStyles();
  return (
    <div>
      <div className="card dark">
        <div className="d-flex justify-content-between  align-items-center card-header">
          <h3>Contacts</h3>
          <small className="text-green ">View all</small>
        </div>
        <div>
          <List dense className={classes.root}>
            {contactDetails.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem className={classes.item} key={value.name} button>
                  <ListItemAvatar>
                    <Avatar alt="contact image" src={value.img} />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={value.name}
                    secondary={value.team}
                  />
                  <ListItemSecondaryAction>
                    <MoreHorizIcon />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
};
