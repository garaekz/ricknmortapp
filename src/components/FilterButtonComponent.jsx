import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterMenu } from "../store/filterMenuSlice";

export default function FilterButtonComponent() {
  const dispatch = useDispatch();

  return (
    <button 
      onClick={() => dispatch(toggleFilterMenu())}
      className="lg:hidden p-2 flex items-center rounded-lg">
      <FaFilter className="mr-3" /> Filters
    </button>
  );
}
