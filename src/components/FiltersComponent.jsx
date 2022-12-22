import { useDispatch, useSelector } from "react-redux";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { setSpecieFilter } from "../store/specieFilterSlice";

export default function FiltersComponent() {
  const dispatch = useDispatch();
  const selectedSpecie = useSelector((state) => state.specieFilter.value);

  const species = [
    { name: "Human", value: "human" },
    { name: "Alien", value: "alien" },
    { name: "Humanoid", value: "humanoid" },
    { name: "Poopybutthole", value: "poopybutthole" },
    { name: "Mythological Creature", value: "mythological" },
    { name: "Unknown", value: "unknown" },
    { name: "Animal", value: "animal" },
    { name: "Disease", value: "disease" },
    { name: "Robot", value: "robot" },
    { name: "Cronenberg", value: "cronenberg" },
  ];

  return (
    <>
      <div className="flex px-8 mb-4">
        <div className="border-b border-gray-400 w-full relative bottom-3"></div>
        <div className="mx-2 text-gray-400 uppercase font-semibold text-lg">
          Species
        </div>
        <div className="border-b border-gray-400 w-full relative bottom-3"></div>
      </div>
      <div className="flex flex-col px-8">
        <ul className="flex flex-col text-gray-200 font-medium">
          {species.map((specie, index) => (
            <li className="mb-2" key={index}>
              <button
                className="flex items-center"
                onClick={() => {
                  dispatch(setSpecieFilter(specie.value));

                }}
              >
                {selectedSpecie === specie.value ? (
                  <BsCheckCircleFill className="text-cyan-600 mr-2 rounded-full" />
                ) : (
                  <BsCircle className="text-gray-400 mr-2" />
                )}
                <span className={`${selectedSpecie === specie.value ? 'scale-110 ml-2':''} hover:scale-110 duration-300`}>
                  {specie.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
