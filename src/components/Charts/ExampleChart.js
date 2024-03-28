// step  1 including all core depenence

import React from 'react'
// include the react fushion chart component
import ReactFC from 'react-fusioncharts'

// include the fushion chart library
import FusionCharts from 'fusioncharts'

// include the cart type
import Chart from 'fusioncharts/fusioncharts.charts'

// include the theme as fushion theme
import FusionThem from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Adding the theme and chart as the core dependency to the fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionThem)

// create the Json object to store the charts configuration.
const chartData = [
  {
    label: 'HTML',
    value: '13',
  },
  {
    label: 'CSS',
    value: '60',
  },
  {
    label: 'JAVASCRIPT',
    value: '80',
  },
]
const ChartComponent = ({ data }) => {
  const chartConfig = {
    type: 'bar3d', // The alias of the chart must be same to the documentation.
    width: '400',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      // chart configuration
      chart: {
        // set the chart caption
        caption: 'Countires With Most Oil Reserves [2018-2019]',
        //subcaption
        subCaption: 'In MMbbl = One Million Barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbble)',
        numberSuffix: 'K',
        theme: 'fusion',
      },
      //chart data.
      data: chartData,
    },
  }
  return <ReactFC {...chartConfig} />
}

export default ChartComponent
