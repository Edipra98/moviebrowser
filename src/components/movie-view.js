import Hero from './hero';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieView = () => {
	const { id } = useParams()
	const [movieDetails, setMovieDetails] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fdfbfd37f3abe399c98d65981a9a0579&language=en-US&append_to_response=star%20wars`)
			.then(response => response.json())
			.then(data => {
				setMovieDetails(data)
				setIsLoading(false)
			})
	}, [id])

	function renderMovieDetails() {
		if(isLoading) {
			return <Hero text="Loading..." />
		} if(movieDetails) {
			// TODO: deal with a possible missing image
			const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
			const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
			return (
				<>
					<Hero text={movieDetails.original_title} backdrop={backdropURL} />
					<div className="container my-5">
						<div className="row">
							<div className="col-md-3">
								<img src={posterPath} alt="..." className="img-fluid shadow rounded" />
							</div>
							<div className="col-md-9">
								<h2>{movieDetails.original_title}</h2>
								<p className="lead">
									{movieDetails.overview}
								</p>
							</div>
						</div>
					</div>
				</>
			)
		}
	}

	return renderMovieDetails()
}

export default MovieView;