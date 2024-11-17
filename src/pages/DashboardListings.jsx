import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function DashboardListings() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const stays = user.stays;
  const totalStays = user.stays.length;
  console.log(user.stays);

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
        <h1>{totalStays} {totalStays === 1 ? "listing" : "listings"}</h1>
        <button><Link to="/stay/edit" className="listings">
         <img src="../../public/svg/plus.svg" alt="" /> Add listings
        </Link></button>
      </div>
    </div>
  );
}
