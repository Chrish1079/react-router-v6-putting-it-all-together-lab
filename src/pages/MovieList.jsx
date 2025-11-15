import { Link, useOutletContext } from "react-router-dom"

const MovieList = () => {
  const { director } = useOutletContext()

  if (!director) {
    return <h2>Director not found.</h2>
  }

  if (director.movies.length === 0) {
    return (
      <section>
        <h3>Movies</h3>
        <p>This director does not have any movies yet.</p>
        <Link to="movies/new">Add New Movie</Link>
      </section>
    )
  }

  return (
    <section>
      <h3>Movies</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="movies/new">Add New Movie</Link>
    </section>
  )
}

export default MovieList

