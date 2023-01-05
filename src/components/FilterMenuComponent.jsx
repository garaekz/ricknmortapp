import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterMenu } from "../store/filterMenuSlice";
import FiltersComponent from "./filters/FiltersComponent";

export default function FilterMenuComponent() {
  const filterMenu = useSelector((state) => state.filterMenu);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        filterMenu ? "bg-white absolute top-0 bottom-0 h-full w-full z-10 flex flex-col" : "hidden"
      } md:block dark:bg-slate-700 dark:text-gray-400`}
    >
      { filterMenu && 
      <div className="p-6 flex justify-end">
        <button onClick={() => dispatch(toggleFilterMenu())}>
          <FiX className="text-2xl" />
        </button>
      </div>
      }
      <div className="md:min-h-[300px] sm:max-h-[75%] md:max-h-[85%] md:fixed min-h-fit max-h-fit md:h-full overflow-y-scroll md:overflow-y-auto scrollbar">
        <FiltersComponent />
      </div>
    </div>
  );
}
