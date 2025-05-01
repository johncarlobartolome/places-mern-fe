import { useParams } from "react-router-dom/cjs/react-router-dom";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceForm.css";

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
    title: "Empire State Building",
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

const UpdatePlace = (props) => {
  const { placeId } = useParams();
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        value={identifiedPlace.title}
        valid={true}
        onInput={() => {}}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        value={identifiedPlace.description}
        valid={true}
        onInput={() => {}}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
