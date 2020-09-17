// JAVASCRIPT PLOTLY

// BAR PLOT
BAR = document.getElementById('bar');

//BAR CHART
var trace1 = {
  y: ['Exploration ', 'Political ', 'Economic ','Environment ','Technology ','Operations ','Employment '],
  x: [30, 28, 27,20,14,10,7],
  name: 'Positive',
  type: 'bar',
  marker: {color: '#343a40'},
  orientation: 'h',
};

var trace2 = {
  y: ['Exploration ', 'Political ', 'Economic ','Environment ','Technology ','Operations ','Employment '],
  x: [29, 24, 14,14,14,7,7],
  name: 'Negative',
  type: 'bar',
  marker: {color: '#17A2B8'},
    orientation: 'h',
};

var data = [trace1, trace2];

var layout = {barmode: 'stack',
              plot_bgcolor: "rgba(0,0,0,0)",
              paper_bgcolor: "rgba(0,0,0,0)",
              xaxis: {title: 'Topic Coverage (%)'},
              yaxis: {autorange: 'reversed'}
            }

Plotly.newPlot(BAR, data, layout);

// GRAPHICAL RESIZING
window.onresize = function() {
  Plotly.Plots.resize(BAR);
  var window_height = window.innerHeight;
  var content_div_height = document.getElementById('bar').offsetHeight;
  // workaround for bug in Plotly: when flexbox container gets smaller, graph does not shrink
  if (content_div_height > (window_height - 40)) {
    var svg_container = document.getElementById('bar').getElementsByClassName('plot-container')[0].getElementsByClassName('svg-container')[0];
    svg_container.style.height = (window_height - 40) + 'px';
    Plotly.Plots.resize(BAR);
  }
};

// LINE PLOTS
LINE = document.getElementById('line');

// var trace1 = {
//   x: ['2019-10', '2019-11', '2019-12', '2020-01','2020-02','2020-03','2020-04','2020-05'],
//   y: [1324, 1318, 1327, 1496, 1774, 1830, 1770],
//   name: 'Model',
//   mode: 'markers',
//   marker: {color: '#626879'},
// };

var trace2 = {
  x: ['2019-10', '2019-11', '2019-12', '2020-01','2020-02','2020-03','2020-04','2020-05'],
  y: [1326, 1354, 1421, 1529, 1639, 1706, 1707],
  name: 'Model',
  type: 'line',
  marker: {color: '#17A2B8'},
};

var trace3 = {
  x: ['2019-10', '2019-11', '2019-12', '2020-01','2020-02','2020-03','2020-04','2020-05'],
  y: [1494, 1471, 1480, 1560, 1598, 1593, 1680],
  name: 'Price',
  type: 'line',
  marker: {color: '#343a40'},
};

var data = [trace2, trace3];

var layout = {
              plot_bgcolor: "rgba(0,0,0,0)",
              paper_bgcolor: "rgba(0,0,0,0)",
              yaxis: {title: 'Price ($/oz)'},
            }

Plotly.newPlot(LINE, data, layout);

// GRAPHICAL RESIZING
window.onresize = function() {
  Plotly.Plots.resize(LINE);
  var window_height = window.innerHeight;
  var content_div_height = document.getElementById('line').offsetHeight;
  // workaround for bug in Plotly: when flexbox container gets smaller, graph does not shrink
  if (content_div_height > (window_height - 40)) {
    var svg_container = document.getElementById('line').getElementsByClassName('plot-container')[0].getElementsByClassName('svg-container')[0];
    svg_container.style.height = (window_height - 40) + 'px';
    Plotly.Plots.resize(LINE);
  }
};

// SENTIMENT
SENT = document.getElementById('sent');

var trace1 = {
  x: ['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
  y: [0.54, 0.47, 0.44, 0.43,0.44,0.38,0.42,0.44,0.39,0.36],
  type: 'scatter',
  name: 'Gold',
  line: {
    color: 'gold',
    width: 3
  }
};

var trace2 = {
  x: ['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
  y: [0.66, 0.63, 0.61, 0.50,0.49,0.56,0.59,0.55,0.49,0.49],
  type: 'scatter',
  name: 'Silver',
  line: {
    color: 'silver',
    width: 3
  }
};


var trace3 = {
  x: ['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
  y: [0.37, 0.48, 0.50, 0.49,0.32,0.52,0.57,0.46,0.28,0.07],
  type: 'scatter',
  name: 'Copper',
  line: {
    color: 'orange',
    width: 3
  }
};

var trace4 = {
  x: ['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
  y: [0.43, 0.44, 0.42, 0.26,0.12,0.30,0.26,0.25,0.16,0.13],
  type: 'scatter',
  name: 'Iron',
  line: {
    color: 'lightblue',
    width: 3
  }
};

var data = [trace1,trace2,trace3,trace4];

var layout = {plot_bgcolor: "rgba(0,0,0,0)",
              paper_bgcolor: "rgba(0,0,0,0)",
              yaxis: {
                title: 'Sentiment'}};

var config = {responsive: true}

Plotly.newPlot(SENT, data, layout,config);

// GRAPHICAL RESIZING
window.onresize = function() {
  Plotly.Plots.resize(SENT);
  var window_height = window.innerHeight;
  var content_div_height = document.getElementById('sent').offsetHeight;
  // workaround for bug in Plotly: when flexbox container gets smaller, graph does not shrink
  if (content_div_height > (window_height - 40)) {
    var svg_container = document.getElementById('sent').getElementsByClassName('plot-container')[0].getElementsByClassName('svg-container')[0];
    svg_container.style.height = (window_height - 40) + 'px';
    Plotly.Plots.resize(SENT);
  }
};
