import React from "react";
import { FavouriteButton } from "./FavoriteButton";
import { SpeakerImage } from "./SpeakerImage";

export const Speaker = ({ id, firstName, lastName, bio, isFavorite }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-6">
      <div className="grid grid-cols-4 mb-6">
        <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
        <div className="flex justify-end">
          <FavouriteButton isFavorite={isFavorite} />
        </div>
      </div>
      <div className="mb-6">
        <SpeakerImage id={id} />
      </div>
      <div className="text-gray-600">{bio.substr(0, 70) + "..."}</div>
    </div>
  );
};
