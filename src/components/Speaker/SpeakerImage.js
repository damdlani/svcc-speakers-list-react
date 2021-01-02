import React from "react";
import { SimpleImg } from "react-simple-img";

export const SpeakerImage = ({id}) => {
  const imageURL = `/speakers/speaker-${id}.jpg`;

  return (
    <SimpleImg
      src={imageURL} 
      animationDuration="0.5"
      height={200}
      width={200}
      applyAspectRatio={true}
    />
  );
};
