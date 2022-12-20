import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import { useGetCharactersQuery } from '../store/api'
import { useQuery } from '../utils/useQuery';

function HomePage() {
  let query = useQuery();
  
  const [page, setPage] = useState(query.get('page') || 1);

  useEffect(() => {
    setPage(query.get('page') || 1);
  }, [query.get('page')]);

  const { data, error, isLoading } = useGetCharactersQuery(page)

  useEffect(() => {
    if (error) {
      console.error('error', error)
    }
  }, [error])

  return (
    <div>
      <h1>Home Page</h1>
      <img src={reactLogo} alt="React Logo" />
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.results.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
      {/* <button onClick={() => setPage((page) => page - 1)} disabled={page === 1}>
        Previous Page
      </button>
      <button
        onClick={() => setPage((page) => page + 1)}
        disabled={data && data.info.next === null}
      >
        Next Page
      </button> */}
      {
        parseInt(page) == 1 ? <button>
        Previous Page
      </button> : <Link to={`?page=${parseInt(page) - 1}`}>
        Previous Page
      </Link>
      }
      {
        data && data.info.next === null ? <button>
        Next Page
      </button> : <Link to={`?page=${parseInt(page) + 1}`}>
        Next Page
      </Link>
      }
    </div>
  )
}

export default HomePage
