import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { getMovieById } from '../services/MoviesAPI'
import styles from '../css/MovieDetails.module.css'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'

const MovieDetailsPage = () => {
  const [showActors, setShowActors] = useState(false)
  const [actors, setActors] = useState([])
  const { id } = useParams()

  const { data, isError, isLoading } = useQuery([`get-movie`, id], () =>
    getMovieById(id)
  )
  useEffect(() => {
    if (data) {
      setActors(data.credits.cast)
    }
  }, [data])

  return (
    <>
      <Container className={styles.container}>
        {isLoading && <h2>Loading movie...</h2>}

        {isError && <h2>Upps! we couldn't find the movie.</h2>}

        {data && (
          <div
            className={styles.container2}
            style={{ width: 'auto' }}
            border='dark'
          >
            <Card.Header className='pt-0'></Card.Header>
            {!showActors && (
              <div className={styles.mainDetails}>
                <div>
                  <Card.Img
                    variant='top'
                    className={styles.image}
                    src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
                    alt={data.title}
                  />
                </div>
                <div>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle className='mb-3 mt-3'>
                      <span>Genres:</span>
                      {data.genres.map((genre) => (
                        <span key={genre.name}>
                          {' '}
                          {genre.name.toLowerCase()},{' '}
                        </span>
                      ))}
                    </Card.Subtitle>
                    <Card.Text>{data.overview}</Card.Text>
                    <ButtonGroup>
                      <Button
                        variant='secondary'
                        disabled={showActors}
                        onClick={() => setShowActors(true)}
                      >
                        Actors
                      </Button>
                    </ButtonGroup>
                  </Card.Body>
                </div>
              </div>
            )}

            {showActors && (
              <Card.Body>
                <Card.Title>{data.title} actors:</Card.Title>

                <ul className={styles.actors}>
                  {actors.map((actor) => (
                    <li className={styles.actor} key={actor.id}>
                      {actor.profile_path ? (
                        <img
                          style={{ maxWidth: '200px' }}
                          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                          alt={actor.name}
                        />
                      ) : (
                        <img
                          style={{ maxWidth: '200px' }}
                          src={`https://via.placeholder.com/200x300?text=No+image+found`}
                          alt={actor.name}
                        />
                      )}
                      <section>
                        <p>{actor.name}</p>
                        <Link to={`/actor/${actor.id}`}>More info</Link>
                      </section>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            )}
          </div>
        )}
      </Container>
    </>
  )
}

export default MovieDetailsPage
