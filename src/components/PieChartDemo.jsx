// src/components/PieChartDemo.jsx
import {
  PieChart, Pie, Cell,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { categoryData } from "../data/sampleData";

const COLORS = ["#ffc000", "#cc9a00", "#ffd44d", "#1a1d2e"];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0];
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: 10,
      padding: "10px 14px",
      boxShadow: "0 4px 16px rgba(0,0,0,.10)",
      fontSize: 13,
    }}>
      <p style={{ fontWeight: 600, color: d.payload.fill ?? "#1a1d2e", margin: 0 }}>
        {d.name}: <strong>{d.value}</strong> ({(d.payload.percent * 100).toFixed(0)}%)
      </p>
    </div>
  );
};

export default function PieChartDemo() {
  return (
    <>
      <div className="chart-header">
        <div className="chart-header-accent" style={{ background: "#ffc000" }} />
        <div>
          <p className="chart-title">🥧 สัดส่วนตามหมวดหมู่</p>
          <p className="chart-subtitle">Donut chart — แบ่งตาม Tech Stack</p>
        </div>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="48%"
              outerRadius={100}
              innerRadius={52}
              dataKey="value"
              paddingAngle={3}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={{ stroke: "#94a3b8", strokeWidth: 1 }}
            >
              {categoryData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  stroke="none"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
