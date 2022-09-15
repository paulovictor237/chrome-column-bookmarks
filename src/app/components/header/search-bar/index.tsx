import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { ChangeEvent, useId, useRef } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

export const SearchBar = () => {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const searchResults = useBookmarks((state) => state.searchResults);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);
  const bookmarksSearch = useBookmarks((state) => state.search);

  const greenStyle =
    'border-green-600 hover:border-green-600 focus-within:border-green-600 text-green-600 group-focus-within:text-green-600 group-hover:text-peve-green-600 ';
  const redStyle =
    'border-red-600 hover:border-red-600 focus-within:border-red-600 text-red-600 group-focus-within:text-red-600 group-hover:text-peve-red-600 ';

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
      ref={formRef}
      onSubmit={onSubmit}
      className={twMerge(
        'group transition-all duration-300 ease-linear',
        'border-2 border-peve-zinc hover:border-peve-selected focus-within:border-peve-selected',
        'text-peve-dark bg-peve-zinc',
        'flex flex-row items-center gap-2',
        'px-2 h-8 rounded-full',
        searchKeywords && (searchResults ? greenStyle : redStyle)
      )}
    >
      <label htmlFor={id}>
        <BiSearch
          size={20}
          className={twMerge(
            'transition-all duration-300 group-hover:text-peve-selected group-focus-within:text-peve-selected',
            searchKeywords && (searchResults ? greenStyle : redStyle)
          )}
        />
      </label>
      <input
        id={id}
        type="search"
        onChange={handleChange}
        placeholder="Enter your keyword to search"
        className="border-none outline-none bg-transparent w-full"
      />
      <button type="submit" className="w-5">
        <FiXCircle
          size={20}
          className={twMerge(
            'cursor-pointe text-peve-dark hover:text-peve-selected',
            !searchKeywords && 'hidden'
          )}
        />
      </button>
    </form>
  );
};
