import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getActorById } from '../services/MoviesAPI'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Actor = () => {
    const [showCredits, setShowCredits] = useState(false)
    const [credits, setCredits] = useState()
    const { id } = useParams()

    const { data, isError, isLoading } = useQuery([`get-actor`, id], () => getActorById(id))

    useEffect(() => {
        if(data){
            setCredits(data.credits.cast)
        }
    }, [data])

    return (
        <>
            <Container >

                {isLoading && <h2>Loading actor...</h2>}

                {isError && <h2>Sorry, we couldn't find the actor. Try again later.</h2>}

                {data && 
                    <Card style={{ width: '18rem' }} border="dark" className="m-2 bg-white more-info-card">
                        
                        <Card.Header>
                            <Button disabled={!showCredits} onClick={() => setShowCredits(false)}>About</Button>
                            <Button disabled={showCredits} onClick={() => setShowCredits(true)}>Other Films</Button>
                        </Card.Header>

                        {!showCredits && 
                        <>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.name} />
                        <Card.Body >
                            <Card.Title>{data.name}</Card.Title>
                            {data.birthday && <Card.Subtitle className="mb-3 mt-3"><span> Birthday:</span> {data.birthday}
                            </Card.Subtitle>}
                            {data.biography && <Card.Text>{data.biography}</Card.Text>}
                            {!data.biography && <Card.Text>No info to show.</Card.Text>}
                        </Card.Body>
                        </> }

                        {showCredits && 
                            <Card.Body>
                                <Card.Title>Other Films:</Card.Title>
                                        
                                <ListGroup>  
                                    {credits?.map(movie => (
                                        <ListGroupItem key={movie.id} >
                                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> 
                                            <section>
                                                <p>{movie.title} ({movie.release_date})</p>
                                                {movie.character && <p>As: {movie.character}</p>}
                                                <Link to={`/movie/${movie.id}`} className="btn btn-dark">More info</Link>
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

export default Actor