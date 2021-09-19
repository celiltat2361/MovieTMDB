import React from 'react'
import Button from 'react-bootstrap/Button'

const Pagination = ({ setSearchParams, page, totalPages}) => {
    return (
        <>
            <div>
                <Button onClick={() => setSearchParams({ p: page - 1})} disabled={page === 1}>Previous</Button>
                <p className="mt-3 text-white">Page {page} of {totalPages} </p>
                <Button onClick={() => setSearchParams({ p: page + 1})} disabled={page === totalPages}>Next</Button>
            </div>
        </>
    )
}

export default Pagination