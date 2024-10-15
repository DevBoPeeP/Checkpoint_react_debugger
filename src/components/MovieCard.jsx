import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ posterUrl, title, rating, description }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Card
        style={{
          width: "18rem",
          height: "20rem",
          backgroundColor: "skyblue",
          boxSizing: "border-box",
        }}
      >
        <Card.Img variant="top" src={posterUrl} />
        <Card.Body
          style={{
            width: "100%",
          }}
        >
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{rating}</Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
