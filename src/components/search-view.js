import Hero from './hero';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailURL = `/movies/${movie.id}`
	const missingImage = `https://www.reelviews.net/resources/img/default_poster.jpg`
    if(movie.poster_path) {
        return (
            <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterURL} className="card-img-top"
                alt="" />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailURL} className="btn btn-primary">Show details</Link>
                </div>
            </div>
            </div>
        )
        } else {
            return (
                <div className="col-lg-3 col-md-3 col-2 my-4">
                <div className="card">
                    <img src={missingImage} className="card-img-top"
                    alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <Link to={detailURL} className="btn btn-primary">Show details</Link>
                    </div>
                </div>
                </div>
            )
        }
}

const SearchView = ({ keyword, searchResults}) => {
	const title= `You are searching for ${keyword}`

    const resultsHTML = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    return (
        <>
            <Hero text={title} />
            {resultsHTML && 
                <div className="container text-center" >
                    <div className="row" >
                        {resultsHTML}
                    </div>
                </div>
            }
            {
                <div className="fs-1 fw-bold text-center">
                    No results found
                </div>
            }
        </>
    )
}

export default SearchView;