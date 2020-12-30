import React from "react";
import { withData } from "./withData";

const Speakers = ({ speakers }) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => (
        <img src={imageSrc} alt={name} key={imageSrc} />
      ))}
    </div>
  );
};

const maxSpeakerToShow = 2;

export default withData(maxSpeakerToShow)(Speakers);
