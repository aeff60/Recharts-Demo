// src/components/LineChartDemo.jsx
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { monthlyData } from "../data/sampleData";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: 10,
      padding: "10px 14px",
      boxShadow: "0 4px 16px rgba(0,0,0,.10)",
      fontSize: 13,
    }}>
      <p style={{ fontWeight: 600, marginBottom: 6, color: "#1a1d2e" }}>{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{ color: p.color, margin: "2px 0" }}>
          {p.dataKey === "sales" ? "ยอดขาย" : "Users"}: <strong>{p.value.toLocaleString()}</strong>
        </p>
      ))}
    </div>
  );
};

export default function LineChartDemo() {
  return (
    <>
      <div className="chart-header">
        <div className="chart-header-accent" style={{ background: "#ffc000" }} />
        <div>
          <p className="chart-title">📈 ยอดขายรายเดือน</p>
          <p className="chart-subtitle">Sales & Users trend — 7 เดือนล่าสุด</p>
        </div>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={monthlyData} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              formatter={(v) => v === "sales" ? "ยอดขาย" : "Users"}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#ffc000"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#ffc000", strokeWidth: 0 }}
              activeDot={{ r: 7, fill: "#ffc000" }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#1a1d2e"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#1a1d2e", strokeWidth: 0 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
