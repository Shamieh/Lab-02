import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/MovieDetails.css";
import Button from 'react-bootstrap/Button';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log("test");
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bc18a843cea9b441f1752b09d80c0396`
    ).then((movieRes) => {
      setMovie(movieRes.data);
    });
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <br />
      <div className="tect-cont">

      <h2>{movie.title}</h2>
      <br />
      <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average}</p>
        <Link to = '/movies'>
        <Button className="button">Back to the list</Button>
        </Link>
      </div>

      <br />
    </div>
  );
};

export default MovieDetails;
