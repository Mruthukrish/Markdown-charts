import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Line = () => {
  const container = useRef(null);

  useEffect(() => {
    const chart = echarts.init(container.current);

    const option = {
      title: { text: 'Sales over time' },
      tooltip: {},
      xAxis: { data: ["Jan", "Feb", "March", 'Apr', 'May'] },
      yAxis: {},
      series: [{
        name: 'Sales over time',
        type: 'line',
        data: [200, 100, 233, 120, 400],
        smooth:true
      }],
    };

    chart.setOption(option);
  }, []);

  return <div ref={container} style={{ width: '100%', height: '400px' }}></div>;
};

export default Line;
