import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await fetch('/api/movies/');
        const data = await response.json();
        setMovies(data);
    };

    const handleSearch = async ({ query, rating, category }) => {
        let url = `/api/movies/filter/?`;
        if (query) url += `q=${query}&`;
        if (rating) url += `rating=${rating}&`;
        if (category) url += `category=${category}&`;

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
    };

    return (
        <div>
            <h1>Movie Explorer</h1>
            <MovieSearch onSearch={handleSearch} />
            <MovieList movies={movies} />
        </div>
    );
};

export default App;