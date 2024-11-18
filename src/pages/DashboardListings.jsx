import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export function DashboardListings() {
  const user = useSelector((storeState) => storeState.userModule.user);  
  const [isSmallListing, setSmallListing] = useState(window.innerWidth <= 745);
  const navigate = useNavigate();
  const stays = user.stays;

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  function handleResize() {
    if (window.innerWidth <= 745) {
      setSmallListing(true);
    } else {
      setSmallListing(false);
    }
  };

  function onImgClick(stayId) {
    const stay = stays.find((stay) => stay._id === stayId);
    navigate(`/stay/${stay._id}`);
  }

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
            {user.stays.length}
            {user.stays.length === 1 ? "listing" : "listings"}
          </h1>
          <button>
            <Link to="/stay/edit" className="add-listing">
              <img src="../../public/svg/plus.svg" alt="" /> Add listings
            </Link>
          </button>
        </div>
        {isSmallListing ? (
          <div className="dashboard-listings-stays-small">
            {stays.map((stay) => (
              <div key={stay._id} className="stay">
                <div className="stay-img">
                  <img
                    onClick={() => onImgClick(stay._id)}
                    src={stay.imgUrl || ""}
                    alt={stay.name}
                    className="stay-image"
                  />
                </div>
                <h1 className="stay-name">{stay.name}</h1>
                <h1 className="num">{stay.capacity} {stay.capacity === 1 ? "Guest" : "Guests"}</h1>
                <h1 className="num">{stay.bedrooms} {stay.bedrooms === 1 ? "Bedroom" : "Bedrooms"}</h1>
                <h1 className="num">{stay.bathrooms} {stay.bathrooms === 1 ? "Bathroom" : "Bathrooms"}</h1>
                <h1 className="num">${stay.price}</h1>
                <div className="name">
                  <Link to={`/stay/edit/${stay._id}`} className="edit-btn">
                    Edit
                  </Link>
                  <Link to={`/stay/${stay._id}`} className="view-btn">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="dashboard-listings-stays">
            <table className="stay-table">
              <thead>
                <tr>
                  <th className="listing">LISTING</th>
                  <th></th>
                  <th>CAPACITY</th>
                  <th>BEDROOMS</th>
                  <th>BATHROOMS</th>
                  <th>PRICE</th>
                  <th className="manage">MANAGE</th>
                </tr>
              </thead>
              <tbody>
                {stays.map((stay) => (
                  <tr key={stay._id}>
                    <td className="stay-img">
                      <img
                        onClick={() => onImgClick(stay._id)}
                        src={stay.imgUrl || ""}
                        alt={stay.name}
                        className="stay-image"
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>
                    <td className="stay-name">{stay.name}</td>
                    <td className="num">{stay.capacity}</td>
                    <td className="num">{stay.bedrooms}</td>
                    <td className="num">{stay.bathrooms}</td>
                    <td className="num">${stay.price}</td>
                    <td className="name">
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
          </div>
        )}
      </div>
    </div>
  );
}
