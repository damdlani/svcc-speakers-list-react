import React from "react";

export const FavouriteButton = ({ isFavorite }) => {
  return (
    <div className={isFavorite ? "heartredbutton" : "heartdarkbutton"}></div>
  );
};
