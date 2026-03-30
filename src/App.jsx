import LineChartDemo from "./components/LineChartDemo";
import BarChartDemo   from "./components/BarChartDemo";
import PieChartDemo   from "./components/PieChartDemo";
import AreaChartDemo  from "./components/AreaChartDemo";
import "./App.css";

const STATS = [
  {
    icon: "📈",
    label: "ยอดขายรวม",
    value: "19,550",
    unit: "บาท",
    change: "+12.5%",
    up: true,
    color: "#0ea5e9",
  },
  {
    icon: "💰",
    label: "Revenue รวม",
    value: "15,681",
    unit: "บาท",
    change: "+8.2%",
    up: true,
    color: "#0369a1",
  },
  {
    icon: "👥",
    label: "ผู้ใช้ทั้งหมด",
    value: "30,406",
    unit: "คน",
    change: "+23.1%",
    up: true,
    color: "#7dd3fc",
  },
  {
    icon: "📊",
    label: "ค่าเฉลี่ย/เดือน",
    value: "2,793",
    unit: "บาท",
    change: "-2.3%",
    up: false,
    color: "#1a1d2e",
  },
];

export default function App() {
  return (
    <div className="dashboard">
      {/* ── Header ── */}
      <div className="dashboard-header">
        <div>
          <h1>📊 Recharts Dashboard</h1>
          <p>ข้อมูลยอดขายและผู้ใช้ — ม.ค. ถึง ก.ค.</p>
        </div>
        <div className="dashboard-badge">dev101</div>
      </div>

      {/* ── Stats Row ── */}
      <div className="stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ color: s.color }}>
              {s.value}
              <span className="stat-unit">{s.unit}</span>
            </div>
            <div className={`stat-change ${s.up ? "up" : "down"}`}>
              {s.up ? "▲" : "▼"} {s.change} vs เดือนก่อน
            </div>
          </div>
        ))}
      </div>

      {/* ── Row 1: Line + Bar ── */}
      <div className="charts-grid">
        <div className="chart-card"><LineChartDemo /></div>
        <div className="chart-card"><BarChartDemo /></div>
      </div>

      {/* ── Row 2: Pie + Area ── */}
      <div className="charts-grid">
        <div className="chart-card"><PieChartDemo /></div>
        <div className="chart-card"><AreaChartDemo /></div>
      </div>
    </div>
  );
}
