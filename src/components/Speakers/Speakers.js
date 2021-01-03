import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";

const Speakers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const REQUEST_STATUS = {
    loading: "loading",
    success: "success",
    error: "error",
  };

  const initialState = {
    speakers: [],
    status: REQUEST_STATUS.loading,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          ...state,
          speakers: action.speakers,
          status: REQUEST_STATUS.success,
        };
      case "UPDATE_STATUS":
        return {
          ...state,
          status: action.status,
        };
      case "TOGGLE_FAVORITE":
        return {
          ...state,
          speakers: action.speakers,
        };
      default: return state;
    }
  };

  const [{ speakers, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/speakers");
        dispatch({
          type: "FETCH_SUCCESS",
          speakers: response.data,
        })
      } catch (error) {
        dispatch({
          type: "UPDATE_STATUS",
          status: REQUEST_STATUS.error,
        })
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
      dispatch({
        type: "TOGGLE_FAVORITE",
        speakers: [
          ...speakers.slice(0, index),
          toggledSpeaker,
          ...speakers.slice(index + 1),
        ],
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_STATUS",
        status: REQUEST_STATUS.error,
      })
    }
  };

  if (status === REQUEST_STATUS.loading) {
    return <div className="spinner" />;
  }

  if (status === REQUEST_STATUS.error) {
    return (
      <div>
        An error occured. Is json-server running? (try 'npm run json-server' at
        terminal prompt)
      </div>
    );
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
