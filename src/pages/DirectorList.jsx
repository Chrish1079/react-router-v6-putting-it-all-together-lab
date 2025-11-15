import { Link, useOutletContext } from "react-router-dom"

const DirectorList = () => {
  const { directors, isLoading } = useOutletContext()

  if (isLoading) {
    return <p>Loading directors...</p>
  }

  if (!directors.length) {
    return (
      <section>
        <h2>Directors</h2>
        <p>No directors available.</p>
        <Link to="new">Add New Director</Link>
      </section>
    )
  }

  return (
    <section>
      <h2>Directors</h2>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <Link to={`${director.id}`}>{director.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="new">Add New Director</Link>
    </section>
  )
}

export default DirectorList
