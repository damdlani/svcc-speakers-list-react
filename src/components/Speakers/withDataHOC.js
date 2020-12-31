import { speakers } from "./speakersData";

export const withData = (maxSpeakersToShow) => (Component) => {


  return () => {
    const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
    return <Component speakers={limitSpeakers}></Component>
  };
};
