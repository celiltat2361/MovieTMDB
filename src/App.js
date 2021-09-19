import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Actor from './pages/Actor'
import CategoryPage from './pages/Category'
import MovieGenre from './pages/MovieGenre'
import Genres from './pages/Genres'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import PageNotFound from './pages/PageNotFound'
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {
  
  return (
    <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/genres/:id/:genre">
            <MovieGenre />
          </Route>

          <Route path="/genres">
            <Genres />
          </Route>
          
          <Route path="/category/:category/"> 
            <CategoryPage />
          </Route>

          <Route path="/actor/:id">
            <Actor />
          </Route>

          <Route path="/movie/:id">
            <MovieDetailsPage />
          </Route>

          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
    </div>
  )
}

export default App
