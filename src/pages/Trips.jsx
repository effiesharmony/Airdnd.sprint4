import { useSelector } from "react-redux";

export function Trips() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const trips = user?.trips;
  console.log(user?.trips);

  return (
    <div className="trips">
      <div className="user-trips">
        {user.trips && user.trips.length > 0 ? (
          user.trips.map((trip) => (
            <div key={trip._id}>
              <h3>{trip.name}</h3>
              <img src={trip.imgUrl} alt={trip.name} />
              <p>Price: {trip.price}</p>
              <p>Status: {trip.status}</p>
            </div>
          ))
        ) : (
          <p>No trips available</p>
        )}
      </div>
    </div>
  );
}
