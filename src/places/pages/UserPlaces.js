import { useParams } from "react-router-dom/cjs/react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_2tMbUDil8zDKkDEywWDOrNY9mV8zrb8lwOZkdaFv8j7dxnxjm_guBG8AvGdptsIkLbc3qWHHCYjL2xHQKnJ5vjoXrAt_o9ZIs4f08dBuOtUUxANPFz969gmSfA7hW6tNOtl0F=s680-w680-h510-rw",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_2tMbUDil8zDKkDEywWDOrNY9mV8zrb8lwOZkdaFv8j7dxnxjm_guBG8AvGdptsIkLbc3qWHHCYjL2xHQKnJ5vjoXrAt_o9ZIs4f08dBuOtUUxANPFz969gmSfA7hW6tNOtl0F=s680-w680-h510-rw",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
