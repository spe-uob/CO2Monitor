import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import {
  XYPlot,
  LineSeries,
} from 'react-vis';
import Info from './Info.js';

/**
 * @param {Object} props
 * @param {string} props.name - name of the room
 * @return {React.ReactFragment} Card with room
 */
export default function Room(props) {
  let maximizedGraph;
  if (props.sensors.length > 0) {
    const maximizedGraphData = [];
    for (let i = 0; i < props.sensors[0].data.length; i++) {
      let maxy = props.sensors[0].data[i].y;
      for (let j = 1; j < props.sensors.length; j++) {
        maxy = Math.max(maxy, props.sensors[j].data[i].y);
      }
      maximizedGraphData.push(
          {
            x: props.sensors[0].data[i].x,
            y: maxy,
          },
      );

      maximizedGraph = (<XYPlot height={300} width={500}>
        <LineSeries data={maximizedGraphData} />
      </XYPlot>);
    }
  } else {
    maximizedGraph = 'No sensors in this room';
  }

  return (
    <Card>
      <CardHeader title={'Name: ' + props.name}>

      </CardHeader>
      <CardContent>
        {maximizedGraph}
      </CardContent>
      <CardActions>
        <Info {...props} />
      </CardActions>
    </Card>
  );
}
