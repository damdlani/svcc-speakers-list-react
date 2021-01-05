import React from "react";
import { FavouriteButton as FavoriteButton } from "./FavoriteButton";
import { SpeakerImage } from "./SpeakerImage";

export const Speaker = React.memo(({ id, firstName, lastName, bio, isFavorite, put }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-6 bg-white text-black">
      <div className="grid grid-cols-4 mb-6">
        <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
        <div className="flex justify-end">
          <FavoriteButton
            isFavorite={isFavorite}
            onFavoriteToggle={() => {
              put({
                id,
                firstName,
                lastName,
                bio,
                isFavorite: !isFavorite,
              });
            }}
          />
        </div>
      </div>
      <div className="mb-6">
        <SpeakerImage id={id} />
      </div>
      <div className="text-gray-600">{bio.substr(0, 70) + "..."}</div>
    </div>
  );
});
