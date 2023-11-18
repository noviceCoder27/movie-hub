import { useMovies } from "../../utils/hooks/useMovies";
import { Link } from "react-router-dom";


const TopRated = () => {
    const {data,error,isLoading,isError} = useMovies('top_rated');
    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if(isError) {
        return (
            <div>Error loading data: {error?.message}</div>
        )
    }
    const displayMovies = data?.map(movie => (
        <div key = {movie.id} >
            <div>
                <img src= {`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="Movie Image" height={'200px'} width={'200px'}/>
            </div>
            <Link to = {`/movies/${movie.id}`}>{movie.original_title}</Link>
        </div>
    ))
    return (
        <>
            {displayMovies}
        </>
    )
}

export default TopRated
