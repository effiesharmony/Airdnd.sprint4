import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { TripDetails } from "../cmps/TripDetails.jsx";
import { stayService } from "../services/stay/stay.service.js";
import { loadUserOrders } from "../store/actions/order.actions.js";

export function Trips() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const [isTripDetailsOpen, setTripDetailsOpen] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [stays, setStays] = useState({});

  useEffect(() => {
    if (user?._id) {
      loadUserOrders(user._id).then((response) => {
        setOrders(response);

        const stayIds = response.map((order) => order.stayId);
        Promise.all(stayIds.map((id) => stayService.getById(id)))
          .then((stayData) => {
            const staysMap = stayData.reduce((map, stay) => {
              map[stay._id] = stay;
              return map;
            }, {});
            setStays(staysMap);
          });
      });
    }
  }, [user]);

  const onTripClick = (tripId) => {
    setSelectedTripId(tripId);
    setTripDetailsOpen(true);
  };

  if (!orders.length || !Object.keys(stays).length) return <div>Loading...</div>;

  return (
    <div className="trips-page">
      <h1>Your trips</h1>
      <div className="user-trips">
        {orders.length > 0 ? (
          orders.map((order) => {
            const stay = stays[order.stayId];
            const stayImage = stay?.imgUrls?.[0] || "";
            return (
              <div
                key={order._id}
                className="user-trip"
                onClick={() => onTripClick(order.stayId)}
              >
                <div className="user-trip-top">
                  <img src={stayImage} alt={order.name} className="trip-image" />
                  <h3 className="trip-name">{order.name}</h3>
                </div>
                <div className="user-trip-bottom">
                  <p className="user-trip-price">Total ${order.totalPrice}</p>
                  <p className="user-trip-status">
                    <span className={`status ${order.status?.toLowerCase() || "unknown"}`}>
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No trips yet</p>
        )}
      </div>
      {isTripDetailsOpen && (
        <TripDetails
          selectedTripId={selectedTripId}
          setTripDetailsOpen={setTripDetailsOpen}
        />
      )}
    </div>
  );
}
