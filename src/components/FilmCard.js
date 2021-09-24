import React from 'react';
import { Card, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { useHistory } from 'react-router-dom';
/* 
 const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substr(0, maxLength)} ...` 
  }

 
 */
const FilmCard = ({movie}) => {
   const history = useHistory();
   const handleOnClick = () => {
   history.push(`/movie/${movie.id}`);
  };

  return (
    <>
    <Col xs={6} md={6} lg={2} className={"my-3 movie-card-wrapper"}>
      <Card className="movie-card" onClick={handleOnClick} >
            <Card.Img 
              variant="top"
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              height="250px"
              className="image"
            />
           
            <Card.Body className={"d-flex flex-column justify-content-between"}>
              <Card.Title>{movie.title}</Card.Title>
               {movie.title.length < 45 && <Button variant="dark" onClick={() => history.push(`/movie/${movie.id}`)}>More info</Button>}
            </Card.Body>
        </Card>
    </Col>    
    </>
  )
}

export default FilmCard
