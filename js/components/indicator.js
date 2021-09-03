import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Animation } from '@devexpress/dx-react-chart';

const data = [12.32];
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const API_KEY = process.env.POLY_API_KEY || 'bOAeasmpBznfMCCzxVO2L2Q0qFjnFICM';
  const ws = new WebSocket('wss://socket.polygon.io/forex');


export default class Indicator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
    ws.onopen = () => {
        console.log('Connected!');
        ws.send(`{"action":"auth","params":"${API_KEY}"}`);
        ws.send(`{"action":"subscribe","params":"C.AUD/USD,C.USD/EUR,C.USD/JPY"}`);
    };

    ws.onerror = console.log;
    // Per message packet:
    ws.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        this.state = {
            ...this.state,
            data: data[0].message
        };
    });
  }

// Connection Opened:
   

  render() {
    const { data: indexData } = this.state;

    return (<Card className={useStyles.root}>
      <CardContent>
        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
          Market Index:
        </Typography>
        <Typography variant="h5" component="h2">
          AAPL
        </Typography>
        <Typography variant="body2" component="p">
          {indexData}
          <br />
        </Typography>
      </CardContent>
    </Card>);
  }
}
