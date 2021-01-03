import axios from "axios";
import React, { useEffect, useState } from "react";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";

const Speakers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [speakers, setSpeakers] = useState([]);

  const REQUEST_STATUS = {
    loading: "loading",
    success: "success",
    error: "error",
  };

  const [status, setStatus] = useState(REQUEST_STATUS.loading);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/speakers");
        setSpeakers(response.data);
        setStatus(REQUEST_STATUS.success);
      } catch (error) {
        setStatus(REQUEST_STATUS.error)
      }
    })();
  }, []);

  const onFavoriteToggleHandler = async (speaker) => {
    const toggledSpeaker = {
      ...speaker,
      isFavorite: !speaker.isFavorite,
    };
    const index = speakers.map(({ id }) => id).indexOf(speaker.id);
    try {
      await axios.put(
        `http://localhost:4000/speakers/${speaker.id}`,
        toggledSpeaker
      );
      setSpeakers([
        ...speakers.slice(0, index),
        toggledSpeaker,
        ...speakers.slice(index + 1),
      ]);
    } catch (error) {
      setStatus(REQUEST_STATUS.error)
    }
  };

  if (status === REQUEST_STATUS.loading) {
    return <div className="spinner" />;
  }

  if (status === REQUEST_STATUS.error) {
    return <div>An error occured. Is json-server running? (try 'npm run json-server' at terminal prompt)</div>;
  }

  return (
    <section>
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

export default Speakers;
