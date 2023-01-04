import { useNavigate, useParams } from "react-router-dom";
import CharacterCardComponent from "../components/CharacterCardComponent";
import { useGetSingleCharacterQuery } from "../store/api";

function CharacterPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading, isFetching } = useGetSingleCharacterQuery(id);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {error && <div className="text-white font-bold">Error: {error.message}</div>}
      {data && (
        <div className="w-full flex flex-col md:flex-row text-center bg-white dark:bg-slate-800 rounded-3xl items-center p-4 md:p-16">
          <div className="flex flex-col items-center">
            <div
              className={`${
                data.status === "Alive"
                  ? "border-green-700"
                  : data.status === "Dead"
                  ? "border-red-700"
                  : "border-gray-700"
              } rounded-full md:rounded-none md:rounded-t-md w-40 h-40 md:w-[300px] lg:w-[450px] md:h-auto md:border-0 border-8`}
            >
              <img
                className="rounded-full md:rounded-none md:rounded-t-md w-40 md:w-[300px] lg:w-[450px]"
                loading="lazy"
                src={data.image}
                alt={data.name}
              />
            </div>
            <div
              className={`${
                data.status === "Alive"
                  ? "bg-green-700"
                  : data.status === "Dead"
                  ? "bg-red-700"
                  : "bg-gray-700"
              } uppercase rounded px-2 py-0.5 text-white text-base font-thin -mt-5 md:mt-0 md:w-full md:rounded-none md:rounded-b-md md:px-0 md:py-2`}
            >
              {data.status}
            </div>
          </div>
          <div className="flex flex-col mt-4 w-full md:pl-16">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-none">
                {data.name}
              </h1>
            </div>
            <div className="flex px-8 mb-4 mt-6">
              <div className="border-b dark:border-gray-400 border-slate-700 w-full relative bottom-2"></div>
              <div className="mx-2 dark:text-gray-400 text-slate-700 uppercase text-sm md:text-lg">
                General
              </div>
              <div className="border-b dark:border-gray-400 border-slate-700 w-full relative bottom-2"></div>
            </div>
            <div className="flex px-4 my-1 items-center">
              <div className="w-36 text-gray-500 dark:text-gray-400 rounded-md dark:bg-slate-900 bg-slate-200 px-3 py-1 uppercase text-sm md:text-lg">
                Species
              </div>
              <div className="ml-2 text-gray-800 dark:text-gray-300 text-sm md:text-lg w-full bg-slate-900/20 rounded-md py-1">
                {data.species}
              </div>
            </div>
            <div className="flex px-4 my-1 items-center">
              <div className="w-36 text-gray-500 dark:text-gray-400 rounded-md dark:bg-slate-900 bg-slate-200 px-3 py-1 uppercase text-sm md:text-lg">
                Gender
              </div>
              <div className="ml-2 text-gray-800 dark:text-gray-300 text-sm md:text-lg w-full bg-slate-900/20 rounded-md py-1">
                {data.gender}
              </div>
            </div>
            <div className="flex px-4 my-1 items-center">
              <div className="w-36 text-gray-500 dark:text-gray-400 rounded-md dark:bg-slate-900 bg-slate-200 px-3 py-1 uppercase text-sm md:text-lg">
                Status
              </div>
              <div className="ml-2 text-gray-800 dark:text-gray-300 text-sm md:text-lg w-full bg-slate-900/20 rounded-md py-1">
                {data.status}
              </div>
            </div>
            <div className="flex px-8 mb-4 mt-6">
              <div className="border-b dark:border-gray-400 border-slate-700 w-full relative bottom-2"></div>
              <div className="mx-2 dark:text-gray-400 text-slate-700 uppercase text-sm md:text-lg">
                Whereabouts
              </div>
              <div className="border-b dark:border-gray-400 border-slate-700 w-full relative bottom-2"></div>
            </div>
            <div className="flex px-4 my-1 items-center">
              <div className="w-36 text-gray-500 dark:text-gray-400 rounded-md dark:bg-slate-900 bg-slate-200 px-3 py-1 uppercase text-sm md:text-lg">
                Origin
              </div>
              <div className="ml-2 text-gray-800 dark:text-gray-300 text-sm md:text-lg w-full bg-slate-900/20 rounded-md py-1">
                {data.origin.name}
              </div>
            </div>
            <div className="flex px-4 my-1 items-center">
              <div className="w-36 text-gray-500 dark:text-gray-400 rounded-md dark:bg-slate-900 bg-slate-200 px-3 py-1 uppercase text-sm md:text-lg">
                Location
              </div>
              <div className="ml-2 text-gray-800 dark:text-gray-300 text-sm md:text-lg w-full bg-slate-900/20 rounded-md py-1">
                {data.location.name}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterPage;
