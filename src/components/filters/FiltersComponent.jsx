import { useDispatch } from "react-redux";
import { clearFilters } from "../../store/filtersSlice";
import GenderFilterComponent from "./GenderFilterComponent";
import SpeciesFilterComponent from "./SpeciesFilterComponent";
import StatusFilterComponent from "./StatusFilterComponent";

export default function FiltersComponent() {
  const dispatch = useDispatch();
  return (
    <>
      <SpeciesFilterComponent />
      <GenderFilterComponent />
      <StatusFilterComponent />
      {/* Clear all filters button */}
      <div className="p-8">
        <button 
          onClick={() => dispatch(clearFilters())}
          className="bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-gray-200 font-bold rounded-lg p-4 uppercase w-full">
          Clear all filters
        </button>
      </div>
    </>
  );
}
