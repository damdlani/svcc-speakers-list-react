import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  PUT_FAILURE,
  PUT_SUCCESS,
} from "../../actions/requestActions";
import {
  initialState,
  requestReducer,
  REQUEST_STATUS,
} from "../../reducers/requestReducer";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";

const Speakers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [{ records: speakers, status, error }, dispatch] = useReducer(
    requestReducer,
    initialState
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/speakers");
        dispatch({
          type: FETCH_SUCCESS,
          records: response.data,
        });
      } catch (error) {
        dispatch({
          type: FETCH_FAILURE,
          status: REQUEST_STATUS.error,
          error: error.message,
        });
      }
    })();
  }, []);

  const onFavoriteToggleHandler = async (speaker) => {
    try {
      const toggledSpeaker = {
        ...speaker,
        isFavorite: !speaker.isFavorite,
      };
      await axios.put(
        `http://localhost:4000/speakers/${speaker.id}`,
        toggledSpeaker
      );
      dispatch({
        type: PUT_SUCCESS,
        record: toggledSpeaker,
      });
    } catch (error) {
      dispatch({
        type: PUT_FAILURE,
        status: REQUEST_STATUS.error,
        error: error.message,
      });
    }
  };

  if (status === REQUEST_STATUS.loading) {
    return <div className="spinner" />;
  }

  if (status === REQUEST_STATUS.error) {
    return (
      <div>
        An error occured. Is json-server running? (try 'npm run json-server' at
        terminal prompt)<br></br> {`ERROR MESSAGE: ${error}`}
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
