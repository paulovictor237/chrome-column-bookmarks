import { getBookmarks } from "../../services/getBookmarks";

export default function DownloadJson() {

  const exportData = async () => {
    const data = await getBookmarks()
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "bookmarks.json";
    link.click();
  };

  return (
    <>

      <button
        className='hover:bg-blue-800 hover:text-white dark:hover:text-white dark:hover:bg-blue-600 inline-flex items-center select-none text-blue-700 border border-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800'
        type="button" onClick={exportData}
      >
        Export Data
      </button>
    </>
  );
}
