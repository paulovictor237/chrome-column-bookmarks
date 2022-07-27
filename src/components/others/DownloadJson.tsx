import { ChromeBookmark } from "../../types/ChromeBookmark";

type Props = {
  data: ChromeBookmark[];
}

export default function DownloadJson({ data }: Props) {
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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button className='btn btn-primary border border-spacing-1 border-gray-200 bg-blue-600 rounded-2xl h-12 w-40 m-3'
        type="button" onClick={exportData}>
        Export Data
      </button>
    </>
  );
}
