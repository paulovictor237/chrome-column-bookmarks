import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { ChangeEvent, useRef } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

export const SearchBar = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const searchResults = useBookmarks((state) => state.searchResults);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);
  const bookmarksSearch = useBookmarks((state) => state.search);

  const onSubmit = (event: any) => {
    event.preventDefault();
    formRef.current!.reset();
    bookmarksSearch('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    bookmarksSearch(value);
  };

  return (
    <form
      className={twMerge(
        'outline outline-3 hover:outline-peve-selected focus-within:outline-peve-selected outline-peve-zinc flex flex-row items-center gap-2 border bg-gray-200 rounded-md px-2 h-8',
        searchKeywords &&
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
      <button type="submit" className="w-5">
        <FiXCircle
          className={`cursor-pointer text-peve-zinc hover:text-peve-selected ${
            !searchResults && 'hidden'
          }`}
          size={20}
        />
      </button>
    </form>
  );
};
