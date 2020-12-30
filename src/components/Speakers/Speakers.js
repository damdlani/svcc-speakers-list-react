import React from "react";

export const Speakers = () => {
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

  return (
    <div>
      {speakers.map(({ imageSrc, name }) => (
        <img src={imageSrc} alt={name} key={imageSrc} />
      ))}
    </div>
  );
};
