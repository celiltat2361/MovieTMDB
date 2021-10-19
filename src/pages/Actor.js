import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getActorById } from '../services/MoviesAPI'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import styles from '../css/Actor.module.css';

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
            <Container className={styles.container}>

                {isLoading && <h2>Loading actor...</h2>}

                {isError && <h2>Sorry, we couldn't find the actor. Try again later.</h2>}

                {data && 
                    <Card style={{ width: '48rem' }} border="dark" className="m-6 bg-white more-info-card">
                        
                        <Card.Header>
                            <div className={styles.buttonContainer}>
                                <Button disabled={!showCredits} onClick={() => setShowCredits(false)}>About</Button>
                                <Button disabled={showCredits} onClick={() => setShowCredits(true)}>Other Films</Button>
                            </div>
                        </Card.Header>
                        

                        {!showCredits && 
                        <div className={styles.descContainer}>
                            <div>
                                <Card.Img className={styles.imgContainer} variant="top" src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.name} />
                            </div>   
                            <div>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    {data.birthday && <Card.Subtitle className="mb-3 mt-3"><span> Birthday:</span> {data.birthday}
                                    </Card.Subtitle>}
                                    {data.biography && <Card.Text>{data.biography}</Card.Text>}
                                    {!data.biography && <Card.Text>No info to show.</Card.Text>}
                                </Card.Body>
                            </div> 
                        </div> }

                        {showCredits && 
                            <Card.Body>
                                <Card.Title>Other Films:</Card.Title>
                                        
                                <ListGroup>  
                                    {credits?.map(movie => (
                                        <ListGroupItem key={movie.id} >
                                            <img className={styles.imgOther} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> 
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