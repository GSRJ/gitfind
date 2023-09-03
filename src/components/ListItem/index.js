import React from "react";
import "./style.css";

export const ListItem = ({ key, title, description, url }) => {
  return (
    <div
      key={key}
      className='listItem'
    >
      <div>
        <a href={url}>
          <strong>{title}</strong>
        </a>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
};
