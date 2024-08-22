import React, { useState } from 'react';

const MovieSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [rating, setRating] = useState(0);
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        onSearch({ query, rating, category });
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search by title" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Minimum rating" 
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Category" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default MovieSearch;