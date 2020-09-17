// BAR PLOT
BAR = document.getElementById('bar');

//BAR CHART
var trace1 = {
  x: ['2015', '2016', '2017','2018','2019','2020'],
  y: [1244, 1209, 1319,1284,1325,1632],
  name: 'Prediction',
  type: 'bar',
  marker: {color: '#E5B761'},
};

var trace2 = {
  x: ['2015', '2016', '2017','2018','2019','2020'],
  y: [1160, 1248, 1258,1269,1392,1646],
  name: 'Actual',
  type: 'bar',
  marker: {color: '#343a40'},
};

var data = [trace1, trace2];

var layout = {
              plot_bgcolor: "rgba(0,0,0,0)",
              paper_bgcolor: "rgba(0,0,0,0)",
              yaxis: {title: 'Gold Price ($/oz)'},
            }

Plotly.newPlot(BAR, data, layout);
