import React from "react";
import "./errorpage.css";

export const Errorpage = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>
        Go back to <a href="/">homepage</a>.
      </p>
    </div>
  );
};
