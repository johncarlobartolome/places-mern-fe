import { useCallback } from "react";

import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MIN()]}
        errorText="Please enter a valid description (at least 5 characters)"
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
