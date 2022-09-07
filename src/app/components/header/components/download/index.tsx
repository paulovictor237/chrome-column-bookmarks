import { getBookmarks } from '@/infra/services/getBookmarks';

export const DownloadJson = () => {
  const exportData = async () => {
    const data = await getBookmarks();
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'bookmarks.json';
    link.click();
  };

  return <button onClick={exportData}>Export Data</button>;
};
