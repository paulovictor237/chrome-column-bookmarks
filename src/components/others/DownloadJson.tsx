import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function DownloadJson() {
  const data = useSelector((state: RootState) => state.siteReducer.Bookmark);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();
  };

  return (
    <>
      <button
        className='select-none text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800'
        type="button" onClick={exportData}
      >
        Export Data
      </button>
    </>
  );
}
