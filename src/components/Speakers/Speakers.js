import React from "react";
// import { SpeakersContext } from "./SpeakersContext";
import { withData } from "./withDataHOC"; //HOC
// import { SpeakersRenderProps } from "./SpeakersRenderProps"; //rendering props for children

const Speakers = ({speakers}) => {
  // const speakers = useContext(SpeakersContext); //example of using context
  
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => (
        <img src={imageSrc} alt={name} key={imageSrc} />
      ))}
    </div>
  );
};

// example of RenderProps
// const Speakers = () => {
//   return (
//     <SpeakersRenderProps>
//       {({ speakers }) => {
//         return (
//           <div>
//             {speakers.map(({ imageSrc, name }) => (
//               <img src={imageSrc} alt={name} key={imageSrc} />
//             ))}
//           </div>
//         );
//       }}
//     </SpeakersRenderProps>
//   );
// };

// example of HOC use along with 'withDataHOC'
const maxSpeakerToShow = 2;
export default withData(maxSpeakerToShow)(Speakers);

// export default Speakers;
