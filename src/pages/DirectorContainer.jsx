import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => {
        if (!r.ok) {
          throw new Error("failed to fetch directors")
        }
        return r.json()
      })
      .then((data) => setDirectors(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to the Director's Directory!</h1>
        {error ? (
          <p role="alert">{error}</p>
        ) : (
          <Outlet context={{ directors, setDirectors, isLoading }} />
        )}
      </main>
    </>
  )
}

export default DirectorContainer
