import React from "react";
// import { withData } from "./withData"; //HOC
import { SpeakersRenderProps } from "./SpeakersRenderProps"; //rendering props for children

const Speakers = () => {
  return (
    <SpeakersRenderProps>
      {({ speakers }) => {
        return (
          <div>
            {speakers.map(({ imageSrc, name }) => (
              <img src={imageSrc} alt={name} key={imageSrc} />
            ))}
          </div>
        );
      }}
    </SpeakersRenderProps>
  );
};

//example of HOC use along with 'withDataHOC'
// const maxSpeakerToShow = 2;    
// export default withData(maxSpeakerToShow)(Speakers);

export default Speakers;
