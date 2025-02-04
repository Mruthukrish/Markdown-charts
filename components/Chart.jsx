import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Chart = () => {
  const Container = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(Container.current);

    const option = {
      title: { text: 'Sales Data' },
      tooltip: {},
      xAxis: { data: ["Jan", "Feb", "Mar", "Apr", "May"] },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [120, 200, 150, 80, 220],
        itemStyle: {
          color: '#CCCCFF', 
        },
      }],
    };
    myChart.setOption(option);
  }, []);

  return <div ref={Container} style={{ width: '100%', height: '400px' }}></div>;
};

export default Chart;
