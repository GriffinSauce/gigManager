import React from "react";
import GigsListItem from "/components/GigsListItem";

export default ({ gigs }) => (
  <ul>
    {gigs.map(gig => (
      <li key={gig.id}>
        <GigsListItem gig={gig} />
      </li>
    ))}
    <style jsx>
      {`
        ul {
          margin: 0; 
          padding 0;
          list-style: none; 
        }
        li {
          margin: 10px;
        }
      `}
    </style>
  </ul>
);
