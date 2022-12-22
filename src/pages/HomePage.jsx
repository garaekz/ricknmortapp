import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CharacterCardComponent from "../components/CharacterCardComponent";
import CharacterCardSkeleton from "../components/CharacterCardSkeleton";
import { useGetCharactersQuery } from "../store/api";
import { useQuery } from "../utils/useQuery";
import FiltersComponent from "../components/FiltersComponent";
import { useSelector } from "react-redux";

function HomePage() {
  let query = useQuery();
  const navigate = useNavigate();
  const species = useSelector((state) => state.specieFilter.value);
  const [page, setPage] = useState(query.get("page") || 1);

  useEffect(() => {
    setPage(query.get("page") || 1);
  }, [query.get("page")]);

  useEffect(() => {
    navigate(`/?page=1`);
  }, [species]);

  useEffect(() => {
    if (error) {
      console.error("error", error);
    }
  }, [error]);

  const { data, error, isLoading } = useGetCharactersQuery({page, species});

  return (
    <div className="w-full flex flex-wrap mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="xl:w-1/4 flex flex-col">
        <div className="fixed">
          <FiltersComponent />
        </div>
      </div>
      <div className="xl:w-3/4 flex flex-wrap">
        {isLoading
          ? [...Array(20)].map((e, i) => (
              <div key={i} className="p-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
                <CharacterCardSkeleton />
              </div>
            ))
          : data.results.map((character) => (
              <div
                key={character.id}
                className="p-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/3"
              >
                <Link to={`/character/${character.id}`}>
                  <CharacterCardComponent character={character} />
                </Link>
              </div>
            ))}
      </div>
      <div className="w-full flex justify-center">
        {parseInt(page) == 1 ? (
          <button>Previous Page</button>
        ) : (
          <Link to={`?page=${parseInt(page) - 1}`}>Previous Page</Link>
        )}
        {data && data.info.next === null ? (
          <button>Next Page</button>
        ) : (
          <Link to={`?page=${parseInt(page) + 1}`}>Next Page</Link>
        )}
      </div>
    </div>
  );
}

export default HomePage;
