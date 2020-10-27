import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = `?api_key=`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w342";

export default function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        try{
            const res = await fetch(BASE_URL + id + API_KEY + process.env.MOVIE_API);
            const newMovie = await res.json();
            setMovie(newMovie);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getMovie();
    }, [id]);

    if (!movie.title) return null;

    return (
        <div>
            <img 
                className="backdrop"
                src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path} 
                alt={movie.title + " Backdrop"} 
            />
            <div className="detail-details">
                <img 
                    className="detail-poster"
                    src={IMAGE_URL + POSTER_SIZE + movie.poster_path} 
                    alt={movie.title + " Poster"} 
                />
                <div>
                    <h1>{ movie.title }!</h1>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genres.map((genre) => {
                            return <li key={genre.id}>{genre.name}</li>
                        })}
                    </ul>
                    <Link to="/"><span className="linkToMainPage">{arrowIcon} Go to main page</span></Link>
                </div>
            </div>
        </div>
    )
}