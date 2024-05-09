import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <MovieCard title="Movie 1" id={1} />
    <MovieCard title="Movie 2" id={2} />
    {/* Add more MovieCard components as needed */}
  </div>
);

export default Home;
