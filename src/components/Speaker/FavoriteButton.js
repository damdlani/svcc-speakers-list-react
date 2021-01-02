import React from "react";

export const FavouriteButton = ({ isFavorite, onFavoriteToggle }) => {
  return (
    <div
      className={isFavorite ? "heartredbutton" : "heartdarkbutton"}
      onClick={onFavoriteToggle}
    ></div>
  );
};
