import React from "react";
import "./style.css";

export const ListItem = ({ key, title, description }) => {
  return (
    <div className='listItem'>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
};
