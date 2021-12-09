import React from 'react'
import { Card, Col } from 'react-bootstrap'

import { useHistory } from 'react-router-dom'

const FilmCard = ({ movie }) => {
  const history = useHistory()
  const handleOnClick = () => {
    history.push(`/movie/${movie.id}`)
  }

  return (
    <>
      <Col xs={6} md={6} lg={3} className={'my-3 movie-card-wrapper'}>
        <Card className='movie-card' onClick={handleOnClick}>
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
            className='image'
          />
          <Card.Title>{movie.title}</Card.Title>
        </Card>
      </Col>
    </>
  )
}

export default FilmCard
