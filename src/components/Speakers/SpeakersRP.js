import React, { useState } from "react";
import Request from "../RPs/Request";
import { SpecialMessageRenderProps } from "../RPs/SpecialMessageRenderProps";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";

const Speakers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SpecialMessageRenderProps>
        {({ specialMessage }) => {
          return (
            <Request baseURL="http://localhost:4000" route="speakers">
              {({ records: speakers, status, error, put }) => {
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
                      An error occured. Is json-server running? (try 'npm run
                      json-server' at terminal prompt)<br></br>{" "}
                      {`ERROR MESSAGE: ${error}`}
                    </div>
                  );
                }

                return (
                  <section>
                    <SearchBar
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                    />
                    {specialMessage && specialMessage.length > 0 && (
                      <div
                        className="bg-yellow-300 border-l-8 border-yellow-500 text-black-700 p-4 text-2xl"
                        role="alert"
                      >
                        <p className="font-bold">Special Message</p>
                        <p>{specialMessage}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                      {speakers
                        .filter(({ firstName, lastName }) => {
                          const targetString = `${firstName} ${lastName}`.toLowerCase();
                          return !searchQuery.trim()
                            ? true
                            : targetString.includes(
                                searchQuery.trim().toLowerCase()
                              );
                        })
                        .map((speaker) => (
                          <Speaker
                            key={speaker.id}
                            {...speaker}
                            onFavoriteToggle={() =>
                              onFavoriteToggleHandler(speaker)
                            }
                          />
                        ))}
                    </div>
                  </section>
                );
              }}
            </Request>
          );
        }}
      </SpecialMessageRenderProps>
    </>
  );
};

export default Speakers;
