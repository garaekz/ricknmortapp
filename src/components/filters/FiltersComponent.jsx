import GenderFilterComponent from "./GenderFilterComponent";
import SpeciesFilterComponent from "./SpeciesFilterComponent";
import StatusFilterComponent from "./StatusFilterComponent";

export default function FiltersComponent() {
  return (
    <>
      <SpeciesFilterComponent />
      <GenderFilterComponent />
      <StatusFilterComponent />
    </>
  );
}
