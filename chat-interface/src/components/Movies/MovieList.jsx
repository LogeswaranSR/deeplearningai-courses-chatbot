import React, { useEffect } from "react";
import "./Movies.css";

const MovieList = (props) => {
    const { setState } = props

    useEffect(() => {
        fetch("http://127.0.0.1:5000/movies")
        .then(res => res.json())
        .then(data => {
            setState(state => ({ ...state, movieTitles: data}))
        })
    }, [])

    console.log(props.movieTitles)

    const renderMovies = () => {
        return props.movieTitles.map((movie) => {
            return <li className='movie-widget-list-item' key={movie.id}>
                <a href={movie.link}> {movie.title} </a>
            </li>;
        });
    };

    return (
    <div className="movie-widget">
        <ul className="movie-widget-list"> {renderMovies()} </ul>
    </div>
    );
}

export default MovieList;