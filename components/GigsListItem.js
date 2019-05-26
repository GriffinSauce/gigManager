import React, { Fragment } from "react";
import theme from "/theme";

const convertBreaks = text =>
  (text || "")
    .split("\n")
    .reduce(
      (elements, item, index) => [
        ...elements,
        ...(index === 0 ? [item] : [item, <br />]),
      ],
      [],
    );

export default ({
  gig: { title, venue, date, notes, booker, pay, status },
}) => (
  <article>
    <h2>
      <span className="date">{date}</span>
      <span> - </span>
      <span className="title">{title}</span>
    </h2>
    <div className="body">
      <section>
        <h3>Venue</h3>
        <p>{convertBreaks(venue)}</p>
      </section>
      <section>
        <h3>Booker</h3>
        <p>{convertBreaks(booker)}</p>
      </section>
      <section>
        <h3>Gage</h3>
        <p>{convertBreaks(pay)}</p>
      </section>
      <section>
        <h3>Notes</h3>
        <p>{convertBreaks(notes)}</p>
      </section>
    </div>
    <style jsx>{`
      article {
        background-color: #fff;
        border-radius: ${theme.borderRadius};
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
      }
      h2 {
        margin: 0 0 10px 0;
        font-size: 1.2rem;
        padding: 10px;
        background-color: #efeaff;
        border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
      }
      .date {
        font-weight: 500;
      }
      .body {
        padding: 10px;
      }
      section {
        margin: 0 0 15px 0;
      }
      h3 {
        margin: 0 0 5px 0;
        font-size: 0.8rem;
        font-weight: 400;
        color: #563bbf;
      }
      p {
        margin: 0;
      }
      @media (min-width: 768px) {
        .body {
          display: flex;
        }
        .body > * {
          flex-basis: 300px;
          flex-shrink: 1;
        }
      }
    `}</style>
  </article>
);
