import React from 'react'
import FilmCard from './FilmCard'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../css/FilmList.module.css';
//rendering the list of movies for genres and the categories
const MoviesList = ({ movies }) => {

    return (
        <>
            <Col>
                <Card>
                    <Row >
                        {movies && movies.map(movie => (
                            <FilmCard key={movie.title} movie={movie} />
                        ))}
                    </Row>

                </Card>
            </Col>
        </>
    )
}

export default MoviesList
