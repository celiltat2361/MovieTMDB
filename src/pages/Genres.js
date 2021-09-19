import React from 'react'
import { useQuery } from 'react-query'
import { getGenres } from '../services/MoviesAPI'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const GenresPage = () => {
    const { data, isError, isLoading } = useQuery([`get-genres`], () => getGenres())

    return (
        <>
            <Container>
                
                {isLoading && (<p>Loading posts...</p>)}

                {isError && (<p> Couldn't get list. Try again later plz </p>)}  

                {data && data.genres.map(genre => (
                    <Card key={genre.id} style={{ width: '10rem'}}>
                        <Link to={`/genres/${genre.id}/${genre.name}?p=1`}>{genre.name}</Link>
                    </Card>  
                ))}
            </Container>
        </>
    )
}

export default GenresPage
