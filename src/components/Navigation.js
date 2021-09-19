import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    
  <Navbar>
			<Container>
				<Link to="/" className="navbar-brand">
					MovieApp
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse>
						<Nav>

							<NavLink to="/category/popular?p=1">
								Popular Movies
							</NavLink>

							<NavLink to="/category/now_playing?p=1">
								Now Playing Movies
							</NavLink>

							<NavLink to="/category/top_rated?p=1">
								Top Movies
							</NavLink>

							<NavLink to="/genres">
								Genres
							</NavLink>

						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
    )
}

export default Navigation
