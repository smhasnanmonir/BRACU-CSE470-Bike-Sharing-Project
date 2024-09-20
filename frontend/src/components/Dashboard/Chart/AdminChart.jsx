// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "January",
    earning: 4000,
  },
  {
    name: "February",
    earning: 3000,
  },
  {
    name: "March",
    earning: 2000,
  },
  {
    name: "April",
    earning: 2780,
  },
  {
    name: "May",
    earning: 1890,
  },
  {
    name: "June",
    earning: 2390,
  },
  {
    name: "July",
    earning: 3490,
  },
];

export default function AdminChart() {
  return (
    <BarChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="earning"
        fill="#B3CDAD"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
    </BarChart>
  );
}
