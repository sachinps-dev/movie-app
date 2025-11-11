import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('harry potter');

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=4a3b711b`);
            const data = await response.json();
            if (data.Search) {
                setMovies(data.Search);
            } 
        };

        fetchMovies();
    }, [searchQuery]);

    return (
        <div className="App">
            <h1>Movie App</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <MovieList movies={movies} />
        </div>
    );
}

export default App;