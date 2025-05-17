import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import "./css/MovieCard.css";
import { Link } from 'react-router-dom';


const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError]= useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
    
        axios("https://api.themoviedb.org/3/movie/popular?api_key=bc18a843cea9b441f1752b09d80c0396")
        .then((movieRes)=>{
          setMovies(movieRes.data.results);
          //console.log(movies);
          setLoading(false);
        })
        .catch((error)=>{
          
          setError(true);
          setLoading(false);
        }
      )
      }
      , [])


if (loading) {
    return <p>⏳ Loading...</p>;
  }

  if (error) {
      return <p>❗ Error loading movies.</p>;
  }
      
            return(
      
      
                <>

                    
                    <div className='card-con'>
                    {movies.map((movie, index) => (
                <Link to= {`/movies/${movie.id}`}>
                        <div className='card' key={index} style={{ marginBottom: '20px' }}>
              <h4>{movie.title}</h4><br />
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '200px' }}
                />
                  </div>
            </Link>  
                ))
            }
            </div>
            
        
        </>
        
    )}
    
    

export default MovieCard;
