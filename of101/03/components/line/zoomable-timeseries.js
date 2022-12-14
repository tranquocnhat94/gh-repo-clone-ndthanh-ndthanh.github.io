import dataSeries from '../../assets/irregular-data-series.js'

export default {
  name: 'ZoomableTimeseries',

  setup() {
    const { onMounted } = Vue

    onMounted(() => {

      var ts2 = 1484418600000;
      var dates = [];
      var spikes = [5, -5, 3, -3, 8, -8]
      for (var i = 0; i < 120; i++) {
        ts2 = ts2 + 86400000;
        var innerArr = [ts2, dataSeries[1][i].value];
        dates.push(innerArr)
      }

      var options = {
        series: [{
          name: 'XYZ MOTORS',
          data: dates
        }],
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Stock Price Movement',
          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      };

      var chart = new ApexCharts(document.querySelector("#zoomable-timeseries"), options);
      chart.render();
    })
  },

  template: `
      <div id="zoomable-timeseries"></div>
  `
}