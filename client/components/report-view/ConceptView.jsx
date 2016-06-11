import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import {Line as LineChart} from 'react-chartjs';
import {Radar as RadarChart} from 'react-chartjs';
import {Doughnut as DoughnutChart} from 'react-chartjs';
import {browserHistory} from 'react-router';


export default class ChartComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    $.ajax({
      type: 'GET',
      url: '/api/concept',
      data: { sessionId: this.props.params.sessionId },
      error: function(request, status, error) {
        console.error('error while fetching report data', error);
      },
      success: function(sessionData) {
        var concept = JSON.parse(sessionData[0].concept);
        this.setState({concept})
        console.log('sD', sessionData[0].concept);
        console.log('sD', sessionData[0].concept);

      }.bind(this)
    })
  };
  
  render() {
    return (
      <div>
        <div className='chartview'>
          <h3>Concept Insight</h3>
        </div>
      </div>
    )
  }
}
