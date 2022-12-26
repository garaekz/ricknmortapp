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
        filterMenu ? "bg-white absolute top-0 w-full pb-16 " : "hidden"
      } scrollbar md:block fixed z-10 dark:bg-slate-700 dark:text-gray-400 overflow-y-auto min-h-screen pb-24`}
    >
      { filterMenu && <div className="p-8 flex justify-end">
        <button onClick={() => dispatch(toggleFilterMenu())}>
          <FiX className="text-2xl" />
        </button>
      </div>
      }
      <FiltersComponent />
    </div>
  );
}
