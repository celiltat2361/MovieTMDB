import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useUrlSearchParams } from 'use-url-search-params'
import { getCategory } from '../services/MoviesAPI'
import FilmList from '../components/FilmList'
import Pagination from '../components/Pagination'
import Container from 'react-bootstrap/esm/Container'

const CategoryPage = () => {
    const { category } = useParams()
    const [search, setSearch] = useUrlSearchParams(
        { p: 1 },
        { p: Number }
    )
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(search.p)
    const title = category.toUpperCase().replace("_", " ")

    const { data, isError, isLoading } = useQuery([`get-${category}`, category, search.p], () => getCategory(category, search.p), {
        keepPreviousData: true
    })

    useEffect(() => {
        setSearch({
            p: page
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <>
            <Container>
                <h1 className="text-center text-white mb-4"> {title} </h1>

                {isLoading && (<p className="my-3">Loading posts...</p>)}

                {isError && (<p className="my-3"> Couldn't get list. Try again later plz</p>)}  

                {data && 
                    <>
                      <FilmList movies={data.results}/>
                      <Pagination  page={search.p} totalPages={data.total_pages} setSearchParams={setSearch}/>
                    </>
                }

            </Container>

        </>
    )
}

export default CategoryPage