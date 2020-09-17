Plotly.d3.csv("data/gold_model.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

  var frames = []
  var x = unpack(rows, 'date')
  var y = unpack(rows, 'fit_prediction_9')
  var x2 = unpack(rows, 'date')
  var y2 = unpack(rows, 'price')
  var x3 = unpack(rows, 'date')
  var y3 = unpack(rows, 'fit_lower_9')
  var x4 = unpack(rows, 'date')
  var y4 = unpack(rows, 'fit_upper_9')

  var n = 264;
  for (var i = 0; i < n; i++) {
    frames[i] = {data: [{x: [], y: []}, {x: [], y: []}]}
    // ,{x: [], y: []},{x: [], y: []},
    frames[i].data[1].x = x.slice(0, i+1);
    frames[i].data[1].y = y.slice(0, i+1);
    frames[i].data[0].x = x2.slice(0, i+1);
    frames[i].data[0].y = y2.slice(0, i+1);
    // frames[i].data[2].x = x3.slice(0, i+1);
    // frames[i].data[2].y = y3.slice(0, i+1);
    // frames[i].data[3].x = x4.slice(0, i+1);
    // frames[i].data[3].y = y4.slice(0, i+1);
  }

  // var trace4 = {
  //   type: "scatter",
  //   mode: "lines",
  //   name: 'UCI',
  //   fill: 'tonexty',
  //   fillcolor: 'rgba(240,240,240,0.1)',
  //   x: frames[263].data[3].x,
  //   y: frames[263].data[3].y,
  //   line: {color: 'grey',}
  // }
  //
  // var trace3 = {
  //   type: "scatter",
  //   mode: "lines",
  //   name: 'LCI',
  //   x: frames[263].data[2].x,
  //   y: frames[263].data[2].y,
  //   line: {color: 'grey'}
  // }
  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'Actual',
    x: frames[263].data[0].x,
    y: frames[263].data[0].y,
    line: {color: '#343A40'}
  }

  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'Prediction',
    x: frames[263].data[1].x,
    y: frames[263].data[1].y,
    line: {color: '#E5B761'}
  }



// trace4,trace3,
  var data = [trace1,trace2];

  var layout = {
    xaxis: {
      showgrid: false
    },
    yaxis: {
      showgrid: false,
      title: 'Gold Price ($/oz)',
    },
    legend: {
      orientation: 'h',
      x: 0.5,
      y: 1.2,
      xanchor: 'center'
    },
    updatemenus: [{
      x: 0.5,
      y: 0,
      yanchor: "top",
      xanchor: "center",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: false,
          transition: {
            duration: 0,
          },
          frame: {
            duration: 40,
            redraw: false
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0,
              redraw: false
            }
          }
        ],
        label: "Pause/Reset"
      }]
    }]
  };

  Plotly.newPlot('myDiv', data, layout).then(function() {
    Plotly.addFrames('myDiv', frames);
  });
})
