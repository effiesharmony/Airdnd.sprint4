import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function DashboardListings() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const stays = user.stays;
  const totalStays = user.stays.length;
  console.log(user.stays);

  if (!user || !stays) return <div>Loading</div>;
  return (
    <div className="dashboard-listings">
      <div className="dashboard-links">
        <Link to="/dashboard/listings" className="link-l">
          Listings
        </Link>
        <Link to="/dashboard/reservations" className="link">
          Reservations
        </Link>
      </div>
      <div className="dashboard-listings-list">
        <div className="dashboard-listings-header">
          <h1>
            {totalStays} {totalStays === 1 ? "listing" : "listings"}
          </h1>
          <button>
            <Link to="/stay/edit" className="add-listing">
              <img src="../../public/svg/plus.svg" alt="" /> Add listings
            </Link>
          </button>
        </div>
        <div className="dashboard-listings-stays">
          <table className="stay-table">
            <thead>
              <tr>
                <th>Listing</th>
                <th>Name</th>
                <th>Capacity</th>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stays.map((stay) => (
                <tr key={stay._id}>
                  <td>
                    <img
                      src={stay.imgUrl || ""}
                      alt={stay.name}
                      className="stay-image"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                  <td>{stay.name}</td>
                  <td>{stay.capacity}</td>
                  <td>{stay.bedrooms}</td>
                  <td>{stay.bathrooms}</td>
                  <td>${stay.price}</td>
                  <td>
                    <Link to={`/stay/edit/${stay._id}`} className="edit-btn">
                      Edit
                    </Link>
                    <Link to={`/stay/${stay._id}`} className="view-btn">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </div>
  );
}
