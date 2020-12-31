import React from "react";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";
import { speakers } from "./speakersData";

const Speakers = () => {
  return (
    <section>
      <SearchBar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {speakers.map((speaker) => (
          <Speaker key={speaker.id} {...speaker} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
