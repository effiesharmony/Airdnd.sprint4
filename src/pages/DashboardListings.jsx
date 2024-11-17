import { Link } from "react-router-dom";

export function DashboardListings() {

  // if (!orders) return <div>Loading</div>
  return (
    <div className="dashboard-listings">
      <div className="dashboard-links">
      <Link to="/dashboard/listings" className="listings">
        listings
      </Link>
      <Link to="/dashboard/reservations" className="reservations">
        reservations
      </Link>
      </div>
      <div className="dashboard-listings-list">

      </div>
    </div>
  );
}
