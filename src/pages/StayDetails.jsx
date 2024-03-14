import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const StayDetails = () => {
  const { stayId } = useParams();

  const stays = [
    {
      id: 1,
      name: "White House spring",
      type: "Cottege",
      location: "Mountain View",
      rating: 4.8,
      description:
        "A myth emerged that during the rebuilding of the structure after the Burning of Washington, white paint was applied to mask the burn damage it had suffered, giving the building its namesake hue.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price: 150,
    },
    {
      id: 2,
      name: "Wondering the suburbs",
      type: "Villa",
      location: "Maui, Hawaii",
      rating: 4.9,
      description:
        "the term suburb simply refers to a residential area outside the city center, regardless of administrative boundaries.",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: 500,
    },
    {
      id: 3,
      name: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "Tower Hamlets, London",
      rating: 4,
      description:
        "Bromley Hall is an early Tudor period manor house in Bromley-by-Bow, Tower Hamlets, London. Located on the Blackwall Tunnel northern approach road, it is now owned and restored by Leaside Regeneration.",
      amenities: ["WiFi", "Desert View", "Canteen"],
      price: 100,
    },
    {
      id: 4,
      name: "Summer house of Henri Ford",
      type: "Summer house",
      location: "Tower Hamlets, London",
      rating: 4.5,
      description:
        "Bromley Hall is an early Tudor period manor house in Bromley-by-Bow, Tower Hamlets, London. Located on the Blackwall Tunnel northern approach road, it is now owned and restored by Leaside Regeneration.",
      amenities: ["WiFi", "greenland View", "shed"],
      price: 100,
    },
  ];
  const staysData = stays.find(
    (stay) => stay.id.toString() === stayId.toString(),
  );
  return (
    <div>
      <Header />
      <main className="container py-4">
        <h1 className="display-3">
          <strong>{staysData.name}</strong>
        </h1>
        <p>Type: {staysData.type}</p>
        <p>Location: {staysData.location}</p>
        <p>Rating: {staysData.rating}</p>
        <p>{staysData.description}</p>
        <hr />
        <h2>Amenities</h2>
        <ul className="py-3">
          {staysData.amenities.map((amenity) => (<li>{amenity}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default StayDetails;
