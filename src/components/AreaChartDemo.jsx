// src/components/AreaChartDemo.jsx
import {
  AreaChart, Area, XAxis, YAxis,
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
        <p key={p.dataKey} style={{ color: p.stroke, margin: "2px 0" }}>
          Users: <strong>{p.value.toLocaleString()}</strong>
        </p>
      ))}
    </div>
  );
};

export default function AreaChartDemo() {
  return (
    <>
      <div className="chart-header">
        <div className="chart-header-accent" style={{ background: "#0ea5e9" }} />
        <div>
          <p className="chart-title">🌊 ปริมาณ Users สะสม</p>
          <p className="chart-subtitle">จำนวน Active Users รายเดือน</p>
        </div>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={monthlyData} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#0ea5e9" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              formatter={() => "Users"}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#0ea5e9"
              strokeWidth={2.5}
              fill="url(#colorUsers)"
              dot={{ r: 4, fill: "#0ea5e9", strokeWidth: 0 }}
              activeDot={{ r: 7 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
