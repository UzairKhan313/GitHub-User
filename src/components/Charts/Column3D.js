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

const ChartComponent = ({ data }) => {
  const chartConfig = {
    type: 'column3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Popular',
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        yAxisNameFontSize: '16px',
        xAxisNameFontSize: '16px',
      },
      data,
    },
  }
  return <ReactFC {...chartConfig} />
}

export default ChartComponent
