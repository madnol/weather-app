import React from "react";

const LocationEntry = ({ onUpdate }) => {
  const handleBluer = ev => onUpdate(ev.target.value);

  const handleKyDown = ev => {
    if (ev.key === "Enter") {
      onUpdate(ev.target.value);
    }
  };

  return <div></div>;
};

export default LocationEntry;
