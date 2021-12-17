import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import { sideStyles } from './style'
import { PageType } from '../../types';
import { useRouter } from "next/router";

const CustomIcon: React.FC<{path: string}> = ({path}) => {
    return (
        <object data={path}></object>
    );
}

const pages: PageType[] = [
  {
    path: '/',
    icon: '/icons/home-icon.svg',
  },

  {
    path: '/events',
    icon: '/icons/calendar-icon.svg',
  },

  {
    path: '/users',
    icon: '/icons/profile-user-icon.svg',
  },

  {
    path: '/sms',
    icon: '/icons/sms-icon.svg',
  },

  {
    path: '/settings',
    icon: '/icons/setting-icon.svg',
  },
];

const SideBar = () => {
  const classes = sideStyles();
  const router = useRouter();

  return (
    <div>
      <Link href={`${pages[0].path}`} passHref>
        <div className="d-flex justify-content-center ">
          <div className={classes.header}>Sport Time</div>
        </div>
      </Link>
      <List
        component="nav"
        className="sidebar-list"
        aria-label="main mailbox folders"
      >
        {pages.map((page) => (
          <Link key={`${page.path}${page.icon}`} href={`${page.path}`} passHref>
            <ListItem
              className={
                router.pathname == page.path ? 'active list-item' : 'list-item'
              }
              button
            >
              <IconButton className="list-icon">
                <CustomIcon path={`${page.icon}`} />
              </IconButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
