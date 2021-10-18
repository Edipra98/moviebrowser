import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import AboutView from './components/about-view';
import SearchView from './components/search-view';
import { Switch, Route } from 'react-router';
import MovieView from './components/movie-view'
import NotFound from './components/not-found'

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=fdfbfd37f3abe399c98d65981a9a0579&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
