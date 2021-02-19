import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import {
  Grid,
  Paper,
  Fab,
  IconButton,
  InputBase,
} from '@material-ui/core';
import {Add, Search} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';
import Room from './components/Room.js';

const useStyles = makeStyles((theme) => ({
  addRoom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

/**
 * @return {React.Component}
 */
function App() {
  const classes = useStyles();

  // Populate some fake data
  const roomNum = Math.floor(Math.random() * 10);
  const rooms = [];
  for (let i = 0; i < roomNum; i++) {
    const sensors = [];
    const sensorNum = Math.floor(Math.random() * 20);
    for (let is = 0; is < sensorNum; is++) {
      const dataGen = [];
      // 1440 minutes in a day but that is too slow
      for (let ix = 0; ix < 144; ix++) {
        dataGen.push({x: ix, y: Math.floor(Math.random() * ix) + ix});
      }
      sensors.push(
          {
            id: i * 1000 + is,
            sensorId: i.toString() + ': ' + is.toString(),
            description: 'Well...',
            data: dataGen,
          },
      );
    }
    rooms.push(
        {
          id: i,
          name: i.toString() + ' room',
          sensors: sensors,
        },
    );
  }

  const roomCards = rooms.map((room) => (
    <Grid item
      sm={12}
      md={6}
      lg={4}
      key={room.id * 1000 + room.name}
      className="PaddedCard"
    >
      <Room {...room} />
    </Grid>),
  );

  return (
    <div className="App">
      {/* Header bar */}
      <Paper className="App-header">
        <Grid container
          spacing={0}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item sm={12} md={6}>
            <a className="Left-header">
              CO2 Monitor Control Panel
            </a>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className="Right-header">
              <InputBase
                placeholder="Search For Room"
              />
              <IconButton>
                <Search />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Paper>

      {/* The cards (rooms) */}
      <Grid container
        spacing={0}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {roomCards}
      </Grid>

      {/* Spain but the s is silent */}
      <Fab className={classes.addRoom}>
        <Add />
      </Fab>
    </div>
  );
}

export default App;
