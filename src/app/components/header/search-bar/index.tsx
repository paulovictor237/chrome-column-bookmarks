import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { Site } from '@/domain/entities/site';
import { useRef } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

export const SearchBar = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const Bookmark = useBookmarks((state) => state.bookmark);
  const searchResults = useBookmarks((state) => state.searchResults);
  const bookmarksSearch = useBookmarks((state) => state.search);

  const changeSearchBar = useMenuOptions((state) => state.changeSearchBar);
  const searchBar = useMenuOptions((state) => state.searchBar);

  const onSubmit = (event: any) => {
    event.preventDefault();
    formRef.current!.reset();
    bookmarksSearch([]);
    changeSearchBar(false);
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    search(value);
    changeSearchBar(value === '' ? false : true);
  };

  function searchLocal(searchText: string) {
    function recursive(object: any, search: Site[]) {
      if (object.children !== undefined && object.children.length > 0) {
        object.children.forEach((element: any) => {
          recursive(element, search);
        });
      } else {
        search.push(object);
      }
    }
    let local: Site[] = [];
    recursive(Bookmark, local);
    const filter = local.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return filter;
  }

  async function search(searchText: string) {
    if (searchText === '') return bookmarksSearch([]);
    if (process.env.NODE_ENV === 'development') {
      const local = searchLocal(searchText);
      bookmarksSearch(local);
    } else {
      try {
        const local = await new Promise<any[]>((res) =>
          chrome.bookmarks.search(searchText, res)
        );
        const filter = local.filter(
          (item) =>
            item.dateGroupModified === undefined && item.url !== undefined
        );
        console.log(filter);
        bookmarksSearch(filter);
      } catch (e) {
        const local = searchLocal(searchText);
        bookmarksSearch(local);
      }
    }
  }

  return (
    <form
      className={twMerge(
        'outline outline-3 hover:outline-peve-selected focus-within:outline-peve-selected outline-gray-600 flex flex-row items-center gap-2 border bg-gray-200 rounded-md px-2 h-8',
        searchBar &&
          (searchResults
            ? 'outline-green-600 hover:outline-green-600 focus-within:outline-green-600'
            : 'outline-red-600 hover:outline-red-600 focus-within:outline-red-600')
      )}
      ref={formRef}
      onSubmit={onSubmit}
    >
      <input
        className="outline-none w-full bg-transparent"
        type="text"
        // name='name'
        // ref={ref}
        // value={name}
        onChange={handleChange}
      />
      <button type="submit">
        <FiXCircle
          className="cursor-pointer text-gray-600 hover:text-peve-selected"
          size={20}
        />
      </button>
    </form>
  );
};
