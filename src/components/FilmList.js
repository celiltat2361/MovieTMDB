import React from 'react'
import FilmCard from './FilmCard'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'

//rendering the list of movies for genres and the categories
const MoviesList = ({ movies }) => {

    return (
        <>
        <CardGroup>
            <Row>

            {movies && movies.map(movie => (
                <FilmCard key={movie.title} movie={movie} />
            ))}
            </Row>

        </CardGroup>
        </>
    )
}

export default MoviesList