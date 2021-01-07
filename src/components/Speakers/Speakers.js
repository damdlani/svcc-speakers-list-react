import React, { useContext, useState } from "react";
import { DataContext, DataProvider } from "../../contexts/DataContext";
import { REQUEST_STATUS } from "../../reducers/requestReducer";
import { Speaker } from "../Speaker/Speaker";
import { SearchBar } from "../SpeakersSearchBar/SearchBar";

const SpeakersComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { records: speakers, status, error, put } = useContext(DataContext);

  const specialMessage = "";

  if (status === REQUEST_STATUS.loading) {
    return <div className="spinner" />;
  }

  if (status === REQUEST_STATUS.error) {
    return (
      <div className="text-red-600 text-center">
        An error occured. Check your internet connection and try again.<br></br>{" "}
        {`ERROR MESSAGE: ${error}`}
      </div>
    );
  }

  return (
    <section>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
              : targetString.includes(searchQuery.trim().toLowerCase());
          })
          .map((speaker) => (
            <Speaker key={speaker.id} {...speaker} put={put} />
          ))}
      </div>
    </section>
  );
};

const Speakers = (props) => {
  return (
    <DataProvider
      baseURL="https://my-json-server.typicode.com"
      route="damdlani/svcc-speakers-list-react/speakers"
    >
      <SpeakersComponent {...props} />
    </DataProvider>
  );
};

export default Speakers;
