import { Outlet, useOutletContext, useParams } from "react-router-dom"

function DirectorCard() {
  const { directorId } = useParams()
  const { directors, setDirectors, isLoading } = useOutletContext()
  if (isLoading) {
    return <p>Loading director...</p>
  }
  const director = directors.find((d) => d.id === directorId)

  if (!director) {
    return <h2>Director not found.</h2>
  }

  return (
    <section>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <Outlet context={{ director, setDirectors }} />
    </section>
  )
}

export default DirectorCard
