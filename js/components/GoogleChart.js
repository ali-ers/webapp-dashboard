import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart } from "react-google-charts";
import {
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  ['Country', 'Area'],
  ['Russia', 12],
  ['Canada', 7],
  ['USA', 7],
  ['China', 7 ],
  ['Brazil', 6 ],
  ['Australia', 5 ],
  ['India', 2 ],
  ['Others', 55 ],
];

const data2 = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
];
export default class GoogleChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

        
  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                title: 'My Daily Activities',
                is3D: true,
            }}
            rootProps={{ 'data-testid': '1' }}
        />

        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data2}
            options={{
                title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
        />
      </Paper>
    );
  }
}
