import "panic-overlay";
import React from "react";
import ReactDOM from "react-dom";
import gigs from "/data/gigs.json";
import Header from "/components/Header";
import GigsList from "/components/GigsList";

const App = () => (
  <main>
    <Header />
    <GigsList gigs={gigs} />
    <style jsx global>{`
      html {
        font-family: "Roboto", sans-serif;
      }
      body {
        margin: 0;
        padding: 0;
        background-color: #e0e0e0;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 300;
      }
    `}</style>
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
