import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useHistory } from 'react-router-dom';

const FilmCard = ({movie}) => {
  const history = useHistory();

  return (
    <>
      <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <Card.Body>
                <Button onClick={() => history.push(`/movie/${movie.id}`)}>Details</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default FilmCard
