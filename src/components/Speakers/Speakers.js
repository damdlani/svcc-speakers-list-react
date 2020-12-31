import React, { useState } from "react";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";
import { speakers } from "./speakersData";

const Speakers = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {speakers
        .filter(({firstName, lastName}) => {
          const targetResult = `${firstName} ${lastName}`.toLowerCase();
          return (!searchQuery.trim() ? true : targetResult.includes(searchQuery.trim().toLowerCase()))
        })
        .map((speaker) => (
          <Speaker key={speaker.id} {...speaker} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
