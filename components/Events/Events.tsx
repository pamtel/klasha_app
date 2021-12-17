import React from "react";
import { ScheduleType } from "../../types";
import List from "@material-ui/core/List";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const eventsDetails: ScheduleType[] = [
  {
    id: 1,
    meeting: "Team meetings",
    description: "BD & Treatment Centre",
    time: "4:15 pm - 6:00 pm",
    color: "green",
  },
  {
    id: 2,
    meeting: "Medical checks",
    description: "BD & Treatment Centre",
    time: "4:15 pm - 6:00 pm",
    color: "blue",
  },
];

export const Events = () => {
  return (
    <div className="main-dashboard page-wrapper">
      <div className="d-flex justify-content-between align-items-center card-header">
        <h3>Schedule</h3>
        <small className="text-green">View all</small>
      </div>
      <List>
        {eventsDetails.map((value) => {
          return (
            <div key={value.id} className="wrapper">
              <div className="header-wrapper">
              <p
                className={`meeting ${value.color}`}
              >
                {value.meeting}
              </p>
              <MoreHorizIcon />
              </div>
              <p>{value.description}</p>
              <p className="time">{value.time}</p>
            </div>
          );
        })}
      </List>
    </div>
  );
};
