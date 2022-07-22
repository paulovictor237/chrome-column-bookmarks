import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { getBookmarks } from '../services/chromeService';
import { getFaviconUrl } from "../utils/getFaviconUrl";
import { ChromeBookmark } from "./../types/ChromeBookmark";
import './App.css';

function App() {
  const [data, setdata] = useState([] as ChromeBookmark[]);
  async function getbooks() {
    const gettingTree = await getBookmarks()
    console.log("newstring");
    console.log(gettingTree);
    const [{ children: bookmarks }, { children: otherBookmarks }] = gettingTree[0].children!;
    console.log(bookmarks);
    console.log(otherBookmarks);
    setdata(gettingTree)
  }

  useEffect(() => {
    getbooks()
  }, [])

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  const url = 'https://www.youtube.com'
  const faviconSrc = url && getFaviconUrl(url);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Hello world [ <span className='text-red-600'>{process.env.NODE_ENV}</span> ] !
        </h1>
        <span className='flex items-center rounded-sm'>
          {url && <img
            className='h-6 w-6 min-w-6 mr-3'
            src={faviconSrc}
            alt="description"
          />}
          <span className="select-none tracking-normal font-medium overflow-hidden focus:text-indigo-700 hover:text-red-700 text-lg">
            youtube
          </span>
        </span>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button className='btn btn-primary border border-spacing-1 border-gray-200 bg-blue-600 rounded-2xl h-12 w-40 m-3'
            type="button" onClick={exportData}>
            Export Data
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header >
    </div >
  );
}

export default App;