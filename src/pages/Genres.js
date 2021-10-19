import React from 'react'
import { useQuery } from 'react-query'
import { getGenres } from '../services/MoviesAPI'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import styles from '../css/Genre.module.css'

const GenresPage = () => {
        const { data, isError, isLoading } = useQuery([`get-genres`], () => getGenres())

        return ( 
            <>
                <Container className={styles.container}>

                {
                    isLoading && ( <p> Loading posts... </p>)}

                        {
                            isError && ( <p> Couldn 't get list. Try again later plz </p>)}  

                                {
                                    data && data.genres.map(genre => ( 
                                        <Card className={styles.card} key = { genre.id }
                                        style = {
                                            { margin:'10px' }
                                        } >
                                        <Link to = { `/genres/${genre.id}/${genre.name}?p=1` } > <p>{ genre.name }</p> </Link> 
                                        </Card >
                                    ))
                                } 
                                </Container> 
                                </>
                            )
                        }

                        export default GenresPage;