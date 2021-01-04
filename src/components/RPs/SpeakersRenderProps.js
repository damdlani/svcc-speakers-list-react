import { speakers } from "../Speakers/speakersData";

export const SpeakersRenderProps = (props) => {
  

  return props.children({
    speakers: speakers,
    limit: 2,
  });
};