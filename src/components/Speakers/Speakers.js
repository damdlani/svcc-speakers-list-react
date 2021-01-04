
import React, { useState } from "react";
import { withRequest } from "../HOC/withRequest";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";

const Speakers = ({ records: speakers, status, error, put, bgColor }) => {
  const [searchQuery, setSearchQuery] = useState(""); 

  const onFavoriteToggleHandler = (speaker) => {
    const toggledSpeaker = {
      ...speaker,
      isFavorite: !speaker.isFavorite,
    };
    return put(toggledSpeaker);
  };
  
  if (status.includes("loading")) {
    return <div className="spinner" />;
  }

  if (status.includes("error")) {
    return (
      <div>
        An error occured. Is json-server running? (try 'npm run json-server' at
        terminal prompt)<br></br> {`ERROR MESSAGE: ${error}`}
      </div>
    );
  }

  return (
    <section className={bgColor}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {speakers
          .filter(({ firstName, lastName }) => {
            const targetString = `${firstName} ${lastName}`.toLowerCase();
            return !searchQuery.trim()
              ? true
              : targetString.includes(searchQuery.trim().toLowerCase());
          })
          .map((speaker) => (
            <Speaker
              key={speaker.id}
              {...speaker}
              onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}
            />
          ))}
      </div>
    </section>
  );
};

export default withRequest(`http://localhost:4000`, `speakers`)(Speakers);
