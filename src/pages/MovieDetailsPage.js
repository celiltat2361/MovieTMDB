import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { getMovieById } from '../services/MoviesAPI'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


const SingleMoviePage = () => {
    const [showActors, setShowActors] = useState(false)
    const [actors, setActors] = useState([])
    const { id } = useParams()

    const { data, isError, isLoading } = useQuery([`get-movie`, id], () => getMovieById(id))
    useEffect(() => {
        if(data) {
            setActors(data.credits.cast)
        }
    }, [data])

    return (
        <>
            <Container className="d-flex">
                {isLoading && <h2>Loading movie...</h2>}

                {isError && <h2>Sorry, we couldn't find the movie. Try again later.</h2>}

                {data && 
                    <Card style={{ width: 'auto' }} border="dark">
                       <Card.Header> 
                        </Card.Header>
                        {!showActors && 
                        <>
                        <div className="d-flex">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} alt={data.title} />
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Subtitle className="mb-3 mt-3">
                                <span>Genres: </span>
                                {data.genres.map(genre => (
                                    <span key={genre.name}> {genre.name.toLowerCase()}, </span>
                                ))}
                            </Card.Subtitle>
                            <Card.Text>{data.overview}</Card.Text>
                              <Button  disabled={!showActors} onClick={() => setShowActors(false)}>About</Button>
                            <Button  disabled={showActors} onClick={() => setShowActors(true)}>Actors</Button>
                        </Card.Body>
                        </div>
                        </> }

                        {showActors && 
                        <Card.Body>
                            <Card.Title>{data.title} actors:</Card.Title>
                                    
                            <ListGroup >
                                
                                {actors.map(actor => (
                                    <ListGroupItem key={actor.id} >
                                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} /> 
                                        <section>
                                            <p>{actor.name}</p>
                                            <Link to={`/actor/${actor.id}`}>More info</Link>
                                        </section>
                                    </ListGroupItem>
                                ))}

                            </ListGroup>
                        </Card.Body>
                        }
                    </Card>
                }       
            </Container>
        </>
    )
}

export default SingleMoviePage
