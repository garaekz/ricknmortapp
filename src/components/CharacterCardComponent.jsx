import { HiLocationMarker } from "react-icons/hi";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { IoMaleFemale } from "react-icons/io5";

export default function CharacterCardComponent({ character }) {
  
  return (
    <div className="w-full flex flex-col bg-white dark:bg-slate-800 rounded-3xl items-center p-8">
      <div className={`${character.status === 'Alive' ? 'border-green-700' : character.status === 'Dead' ? 'border-red-700' : 'border-gray-700' } rounded-full border-8 w-48`}>
        <img
          className="rounded-full"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className={`${character.status === 'Alive' ? 'bg-green-700' : character.status === 'Dead' ? 'bg-red-700' : 'bg-gray-700' } uppercase rounded px-2 py-0.5 text-white -mt-5`}>
        { character.status }
      </div>
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {character.name}
        </h1>
        <div className="flex justify-center items-center">
          <span className="text-gray-500 dark:text-gray-400">{character.species}</span>
          <span className="text-gray-500 dark:text-gray-400 mx-2">|</span>
          <div className="flex items-center">
            <span className="mr-1 text-gray-500 dark:text-gray-400">{character.gender}</span>
            { character.gender === 'Male' ? <IoMdMale className="text-cyan-600" /> : character.gender === 'Female' ? <IoMdFemale className="text-fuchsia-600" /> : <IoMaleFemale className="text-gray-600" />}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex items-center justify-center">
            <HiLocationMarker className="text-red-600" />
            <span className="text-gray-500 dark:text-gray-400 ml-2">
              {character.location.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
