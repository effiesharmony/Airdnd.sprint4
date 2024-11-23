export function PlaceModal({handleSelectPlace}) {

  function getRandomCountry() {
    const countries = [
      "United States",
      "Indonesia",
      "Portugal",
      "Thailand",
      "Australia",
      "Canada",
      "Spain"
    ];
  
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  }

  return (
    <div className="place-modal">
      <h1>Search by region</h1>
      <div className="place-btns">
        <div
          className="place-btn"
          onClick={() => handleSelectPlace(getRandomCountry())}
        >
          <img src="../../public/img/world.jpg" alt="world" />
          <h2>I’m flexible</h2>
        </div>

        <div
          className="place-btn"
          onClick={() => handleSelectPlace("Turkey")}
        >
          <img src="../../public/img/middle-east.webp" alt="middle east" />
          <h2>Middle East</h2>
        </div>

        <div
          className="place-btn"
          onClick={() => handleSelectPlace("Italy")}
        >
          <img src="../../public/img/italy.webp" alt="italy" />
          <h2>Italy</h2>
        </div>

        <div
          className="place-btn"
          onClick={() => handleSelectPlace("United States")}
        >
          <img src="../../public/img/united-states.webp" alt="united states" />
          <h2>United States</h2>
        </div>

        <div
          className="place-btn"
          onClick={() => handleSelectPlace("Greece")}
        >
          <img src="../../public/img/greece.webp" alt="greece" />
          <h2>Greece</h2>
        </div>

        <div
          className="place-btn"
          onClick={() =>
            handleSelectPlace("Indonesia")
          }
        >
          <img src="../../public/img/southeast-asia.webp" alt="southeast asia" />
          <h2>Southeast Asia</h2>
        </div>
      </div>
    </div>
  )
}
