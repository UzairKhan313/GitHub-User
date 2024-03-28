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
    type: 'pie3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '35%',
        // paletteColors: '#f0db4f, #fffffff, #ffff00',
      },
      data,
    },
  }
  return <ReactFC {...chartConfig} />
}

export default ChartComponent
