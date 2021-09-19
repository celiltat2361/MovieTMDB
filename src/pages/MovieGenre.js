import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMoviesByGenre } from '../services/MoviesAPI'
import { useUrlSearchParams } from 'use-url-search-params'
import MoviesList from '../components/FilmList'
import Pagination from '../components/Pagination'
import Container from 'react-bootstrap/Container'

//handles rendering of displaying movies by genre
const GenreMoviesPage = () => {
    const { id } = useParams()
    const { genre } = useParams()
    const [searchParams, setSearchParams] = useUrlSearchParams(
        { p: 1 },
        { p: Number }
    )
    const [page, setPage] = useState(searchParams.p)

    const { data, error, isError, isLoading } = useQuery([`get-movies`, id, searchParams.p], () => getMoviesByGenre(id, searchParams.p), {
        keepPreviousData: true
    })

    useEffect(() => {
        setSearchParams({
            p: page
        })
       
    }, [page])

    return (
        <>
            <Container>
                <h1> {genre.toUpperCase()} </h1>
                {isLoading && (<p>Loading posts...</p>)}
                {isError && (<p> Couldn't get list. Try again later plz({error})</p>)}  

                {data && 
                    <>
                        <MoviesList movies={data.results} />
                        <Pagination page={searchParams.p} totalPages={data.total_pages} setSearchParams={setSearchParams}/>
                    </>
                }

            </Container>
        </>
    )
}

export default GenreMoviesPage
