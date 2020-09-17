// JAVASCRIPT PLOTLY

// LINE PLOTS
LINE = document.getElementById('line');

function random_date(start, end, mul)
  {
    return new Date(start.getTime() + mul * (end.getTime() - start.getTime()));
  }

function date_list(y1,m1,d1,y2,m2,d2,count)
  {
    var a =[];
    for(i=0;i<count;i++)
    {
      a.push(random_date(new Date(y1, m1, d1), new Date(y2,m2,d2),i));
    }
      return a;
  }

function random_number(num , mul)
  {
     var value = [ ];
     for(i=0;i<=num;i++)
      {
        var rand = Math.random() * mul;
        value.push(rand);
      }
     return value;
  }

var trace1 = {
  x: date_list(2020,01,01,2020,02,01,20),
  y: random_number(10,20),
  line: {width: 0},
  marker: {color: "444"},
  mode: "lines",
  name: "Lower Bound",
  type: "scatter"
};

var trace2 = {
  x: date_list(2020,01,01,2020,02,01,20),
  y: random_number(10,20),
  fill: "tonexty",
  fillcolor: "rgba(68, 68, 68, 0.3)",
  line: {color: "#17A2B8"},
  mode: "lines",
  name: "Discover",
  type: "scatter"
};

var trace3 = {
  x: date_list(2020,01,01,2020,02,01,20),
  y: random_number(10,20),
  fill: "tonexty",
  fillcolor: "rgba(68, 68, 68, 0.3)",
  line: {width: 0},
  marker: {color: "444"},
  mode: "lines",
  name: "Upper Bound",
  type: "scatter"
}

var data = [trace1, trace2, trace3];
var layout = {
  showlegend: false,
  xaxis: {
    showgrid: false,
    zeroline: false,
    showline: false,
  },
  yaxis: {
    showgrid: false,
    zeroline: false,
    showline: false,
  },
  font: {
    size: 1,
    color: 'white'
  },
  plot_bgcolor: "rgba(0,0,0,0)",
  paper_bgcolor: "rgba(0,0,0,0)",
  hovermode: false,
};

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
