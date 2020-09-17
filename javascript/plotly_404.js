TER = document.getElementById('ter');

var rawData = [
    {yes:75,no:25,maybe:0},
    {yes:10,no:25,maybe:60},
    {yes:25,no:25,maybe:25},
    {yes:100,no:10,maybe:10},
    {yes:17,no:60,maybe:25},
    {yes:7,no:41,maybe:80},
    {yes:50,no:25,maybe:20},
    {yes:15,no:15,maybe:26},
    {yes:65,no:55,maybe:10},
    {yes:40,no:22,maybe:80},
];

Plotly.newPlot('ter', [{
    type: 'scatterternary',
    mode: 'markers',
    a: rawData.map(function(d) { return d.yes; }),
    b: rawData.map(function(d) { return d.no; }),
    c: rawData.map(function(d) { return d.maybe; }),
    text: rawData.map(function(d) { return d.label; }),
    marker: {
        symbol: 'diamond',
        color: '#17a2b8',
        size: 14,
        line: { width: 0 }
    },
}], {
    ternary: {
        sum: 100,
        aaxis: makeAxis('Yes...', 0),
        baxis: makeAxis('<br>Maybe?', 45),
        caxis: makeAxis('<br>No!', -45),
        bgcolor: '#fff1e0'
    },
      paper_bgcolor: "rgba(0,0,0,0)",
        hovermode: false,
});

function makeAxis(title, tickangle) {
    return {
      title: title,
      titlefont: { size: 20 },
      tickangle: tickangle,
      tickfont: { size: 15 },
      tickcolor: 'rgba(0,0,0,0)',
      ticklen: 5,
      showline: true,
      showgrid: true
    };
}

Plotly.newPlot(TER, data, layout);

// GRAPHICAL RESIZING
window.onresize = function() {
  Plotly.Plots.resize(TER);
  var window_height = window.innerHeight;
  var content_div_height = document.getElementById('ter').offsetHeight;
  // workaround for bug in Plotly: when flexbox container gets smaller, graph does not shrink
  if (content_div_height > (window_height - 40)) {
    var svg_container = document.getElementById('ter').getElementsByClassName('plot-container')[0].getElementsByClassName('svg-container')[0];
    svg_container.style.height = (window_height - 40) + 'px';
    Plotly.Plots.resize(TER);
  }
};
