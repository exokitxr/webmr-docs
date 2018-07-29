window.onload = function() {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Exokit Engine", "Chrome", "Firefox"],
      datasets: [{
        label: ' Average Frames per Second',
        data: [220, 140, 142],
        backgroundColor: [
          'rgba(2,188,159,0.2)',
          'rgba(76,139,245,0.2)',
          'rgba(238,132,36,0.2)',
        ],
        borderColor: [
          'rgba(2,188,159,0.5)',
          'rgba(76,139,245,0.5)',
          'rgba(238,132,36,0.5)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
};



