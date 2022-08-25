import { useRef } from "react";
import Donate from "../components/ui/Donate";
import NewTab from "../components/ui/NewTab";
import SearchBar from "../components/ui/SearchBar";

export default function Header() {
  const searchBarRef = useRef<HTMLInputElement>(null);
  return (
    //p-5 p-2 gap-0
    <div className="bg-dark700 flex items-center justify-between shadow-lg gap-2 p-2">
      <div className="flex gap-2 justify-between items-center h-full">
        {/* <DownloadJson /> */}
        <NewTab />
        {/* <LockEdit /> */}
      </div>
      <SearchBar />
      <Donate />
      {/* <span className=' inline-flex items-center select-none text-blue-700 border border-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800'>
        Version: Beta
      </span> */}
    </div>
  );
}
