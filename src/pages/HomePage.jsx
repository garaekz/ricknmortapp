import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import CharacterCardComponent from '../components/CharacterCardComponent';
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
      {isLoading && <p>Loading...</p>}
      {data && data.results.map((character) => (
        <div key={character.id} className="p-4">
          <Link to={`/character/${character.id}`}>
            <CharacterCardComponent character={character} />
          </Link>
        </div>
      ))}
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
