export const SpeakersRenderProps = (props) => {
  const pathName = "images";
  const speakers = [
    {
      imageSrc: `${pathName}/speaker-component-1530.png`,
      name: "Tamara Baker",
    },
    {
      imageSrc: `${pathName}/speaker-component-10803.png`,
      name: "Eugene Chuvyrov",
    },
    {
      imageSrc: `${pathName}/speaker-component-1124.png`,
      name: "Douglas Crockford",
    },
  ];

  return props.children({
    speakers: speakers,
    limit: 2,
  });
};