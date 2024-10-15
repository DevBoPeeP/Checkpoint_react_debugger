import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovies";
import { movies } from "./movies";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [originalMovies, setOriginalMovies] = useState(movies);

  const [filteredMovies, setFilteredMovies] = useState(originalMovies);
  const handleFilterChange = (title, rating) => {
    const filteredMovies = movies.filter((movie) => {
      let filtered = originalMovies;
      if (title && rating) {
        filtered =
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          movie.rating === parseInt(rating);
        return filtered;
      } else if (title) {
        filtered = movie.title.toLowerCase().includes(title.toLowerCase());
        return filtered;
      } else if (rating) {
        filtered = movie.rating === parseInt(rating);
        return filtered;
      } else {
        return movies;
      }
    });
    setFilteredMovies(filteredMovies);
  };

  const addMovieHandler = (inputValues) => {
    setOriginalMovies([...originalMovies, inputValues]);
    setFilteredMovies([...filteredMovies, inputValues]);
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Filter onFilterChange={handleFilterChange} />
      <AddMovie addMovie={addMovieHandler} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
