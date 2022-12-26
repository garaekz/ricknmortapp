import { HiLocationMarker } from "react-icons/hi";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { IoMaleFemale } from "react-icons/io5";

export default function CharacterCardSkeleton() {
  
  return (
    <div className="animate-pulse w-full flex flex-col bg-white dark:bg-slate-800 rounded-3xl items-center p-4 h-80">
      <div>
        <div className={`rounded-full border-8 bg-gray-200 dark:bg-gray-600 border-gray-200 dark:border-gray-600 w-40 h-40`}>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between mt-6">
        <div className="bg-gray-200 dark:bg-gray-600 h-6 w-40 rounded">
        </div>
        <div className="flex justify-center items-center mt-2">
          <div className="bg-gray-500 dark:bg-gray-600 h-4 w-16 rounded"></div>
          <span className="text-gray-500 dark:text-gray-600 mx-2">|</span>
          <div className="bg-gray-500 dark:bg-gray-600 h-4 w-16 rounded"></div>
        </div>
      </div>
    </div>
  );
}
