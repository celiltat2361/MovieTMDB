import React from 'react'
import FilmCard from './FilmCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

//rendering the list of movies for genres and the categories
const MoviesList = ({ movies }) => {

    return (
        <>
        <Container>
            <Row>

            {movies && movies.map(movie => (
                <FilmCard key={movie.title} movie={movie} />
            ))}
            </Row>

        </Container>
        </>
    )
}

export default MoviesList