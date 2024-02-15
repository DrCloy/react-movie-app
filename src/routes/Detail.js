import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>
            <a href={movie.url}>{movie.title}</a>
          </h1>
          <br />
          <h2>Year: {movie.year}</h2>
          <h2>Genres</h2>
          <ul>{movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}</ul>
          <h2>Rating: {movie.rating}</h2>
          <h2>Description</h2>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
