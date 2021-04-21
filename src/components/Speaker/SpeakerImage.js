import React from "react";
import { SimpleImg } from "react-simple-img";

export const SpeakerImage = ({id}) => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imageURL = `/speakerimages/Speaker-${id}.jpg`;

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
