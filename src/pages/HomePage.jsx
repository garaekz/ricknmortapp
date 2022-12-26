import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import CharacterCardComponent from "../components/CharacterCardComponent";
import CharacterCardSkeleton from "../components/CharacterCardSkeleton";
import { useGetCharactersQuery } from "../store/api";
import { useQuery } from "../utils/useQuery";
import { useSelector } from "react-redux";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import FilterButtonComponent from "../components/FilterButtonComponent";
import FilterMenuComponent from "../components/FilterMenuComponent";

function HomePage() {
  const navigate = useNavigate();
  const filterMenu = useSelector((state) => state.filterMenu);
  let query = useQuery();
  const species = useSelector((state) => state.filters.species);
  const status = useSelector((state) => state.filters.status);
  const gender = useSelector((state) => state.filters.gender);

  const [page, setPage] = useState(query.get("page") || 1);

  useEffect(() => {
    setPage(query.get("page") || 1);
  }, [query.get("page")]);

  useEffect(() => {
    let currentPage = query.get("page");

    if (!currentPage || gender || status || species) {
      currentPage = 1;
    }
    navigate(`?page=${currentPage}`, { replace: true });
  }, [species, status, gender]);

  const { data, error, isLoading, isFetching } = useGetCharactersQuery(
    { page, species, status, gender },
    { forceRefetch: true }
  );

  const renderData = () => {
    if (isLoading) {
      return [...Array(6)].map((e, i) => (
        <div key={i} className="p-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
          <CharacterCardSkeleton />
        </div>
      ));
    }

    // I dunno if this is the best way to do it...

    // if (isFetching) {
    //   return (
    //     <div className="w-full h-96 flex justify-center items-center dark:text-cyan-400 font-bold text-2xl">
    //       <ImSpinner9 className="animate-spin" />
    //     </div>
    //   )
    // }

    if (error && error.status === 404) {
      return (
        <div className="w-full h-96 flex justify-center items-center dark:text-gray-200 font-bold text-2xl">
          No results found :c
        </div>
      );
    }

    return data.results.map((character) => (
      <div key={character.id} className="p-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
        <Link to={`/character/${character.id}`}>
          <CharacterCardComponent character={character} />
        </Link>
      </div>
    ));
  };

  return (
    <div className={`${filterMenu ? 'max-h-96 -mt-30 h-full overflow-hidden':''}`}>
      <div className="w-full flex flex-wrap mx-auto max-w-7xl sm:px-6 lg:px-8 pb-24">
        <div className="lg:w-1/4 md:w-1/3 flex flex-col">
          <FilterMenuComponent />
        </div>
        <div className="lg:w-3/4 md:w-2/3 flex flex-wrap">
          <div className="px-4 flex w-full justify-between items-center text-gray-400 dark:text-gray-400 font-bold text-xl">
            <FilterButtonComponent />
            <span className="p-2">
              Page {page} of {data && data.info.pages}
            </span>
          </div>
          {renderData()}
        </div>
      </div>
      <div className="w-full flex justify-center fixed bottom-0">
        {parseInt(page) === 1 ? (
          <button
            className="p-4 bg-slate-500 dark:text-gray-400 rounded mx-2 my-8"
            disabled
          >
            <FiArrowLeft />
          </button>
        ) : (
          <Link
            className="p-4 bg-slate-600 dark:text-gray-200 rounded mx-2 my-8"
            to={`?page=${parseInt(page) - 1}`}
          >
            <FiArrowLeft />
          </Link>
        )}

        <button
          className="px-5 text-xl bg-slate-400 dark:text-white font-bold rounded mx-2 my-8"
          disabled
        >
          {page}
        </button>
        {data && data.info.next === null ? (
          <button
            className="p-4 bg-slate-500 dark:text-gray-400 rounded mx-2 my-8"
            disabled
          >
            <FiArrowRight />
          </button>
        ) : (
          <Link
            className="p-4 bg-slate-600 dark:text-gray-200 rounded mx-2 my-8"
            to={`?page=${parseInt(page) + 1}`}
          >
            <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePage;
