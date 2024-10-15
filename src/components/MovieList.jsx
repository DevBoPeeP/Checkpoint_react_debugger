import React from "react";
import MovieCard from "./MovieCard";
import { Col, Row } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={3} sm={6}>
          <MovieCard
            posterUrl={movie.posterUrl}
            description={movie.description}
            rating={movie.rating}
            title={movie.title}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
