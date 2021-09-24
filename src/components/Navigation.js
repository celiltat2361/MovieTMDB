import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="/">My Movies App</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" >

							<NavLink className="nav-link" to="/category/popular?p=1">
								Popular Movies
							</NavLink>

							<NavLink className="nav-link" to="/category/now_playing?p=1">
								Now Playing Movies
							</NavLink>

							<NavLink className="nav-link" to="/category/top_rated?p=1">
								Top Movies
							</NavLink>

							<NavLink className="nav-link" to="/genres">
								Genres
							</NavLink>

						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>

		
    )
}

export default Navigation
