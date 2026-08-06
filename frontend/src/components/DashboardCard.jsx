import "../styles/Card.css";

function DashboardCard({ title, value, color }) {
  return (
    <div className="dashboard-card">
      <div
        className="card-icon"
        style={{ backgroundColor: color }}
      ></div>

      <div className="card-content">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default DashboardCard;