import React from 'react';
import Button from '@material-ui/core/Button';
import { Contact } from '../Contact/Contact';
import Reminder from '../Reminder/Reminder';
import { Calender } from '../Calender/Calender';
import Charts from '../Chart/Chart';
import { Events } from '../Events/Events';

const Dashboard = () => {
  return (
    <div className="page-wrapper">
      <h1>Dashboard</h1>

      <section className="main-dashboard">
        <div className="d-flex justify-content-between">
          <div className="cards-con">
            <div className="row">
              <div className="greeting-card-con">
                <div className="card green">
                  <div className="row">
                    <div className="content-con">
                      <h3>Good Morning, Eleanor</h3>
                      <p>
                        Welcome to your daily event calendar. Here you can see
                        all the upcoming events, meeting and create new events.
                      </p>
                    </div>
                    <div className="img-con">
                      <img src="/girl-ball.png" alt="girl" />
                    </div>
                  </div>
                  <div className="action">
                    <Button
                      variant="contained"
                      disableElevation
                      className="btn btn-white"
                    >
                      + Create event
                    </Button>
                  </div>
                </div>
              </div>
              <div className="reminder-card-con">
                <Reminder />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="contact-card-con">
                <Contact />
              </div>

              <div className="chart-card-con">
                <div className="card dark">
                  <div className="d-flex justify-content-between align-items-center card-header">
                    <h3>Half Year Work Results</h3>
                    <small className="text-green ">Browse more</small>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="graph-text">10</p>
                      <p className="graph-text">7.5</p>
                      <p className="graph-text">5.0</p>
                      <p className="graph-text">2.5</p>
                      <p className="graph-text">1.0</p>
                      <p className="graph-text">0</p>
                    </div>
                    <Charts />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <small className="graph-footer">
                      <span className="yellow">o</span> Training sessions
                    </small>
                    <small className="graph-footer">
                      <span className="red">o</span> Team meetings
                    </small>
                    <small className="graph-footer">
                      <span className="blue">o</span> Medical checks
                    </small>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="calender-con">
            <div className="inner">
              <Calender />
              <Events />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
