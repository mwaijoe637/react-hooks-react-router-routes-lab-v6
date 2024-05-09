// Movie.js
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  // Fetch movie details based on id

  return (
    <div>
      <NavBar />
      <h1>Movie Details</h1>
      {/* Render movie details */}
    </div>
  );
}

export default Movie;
