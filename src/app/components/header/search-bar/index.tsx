import { RootState } from '@/app/reducer';
import { SiteActions } from '@/app/reducer/bookmarks';
import { optionsActions } from '@/app/reducer/options';
import { Site } from '@/domain/entities/Site';
import { useRef } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

export const SearchBar = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const Bookmark = useSelector(
    (state: RootState) => state.SiteReducer.Bookmark
  );
  const searchFolderLength = useSelector(
    (state: RootState) => state.SiteReducer.searchFolderLength
  );

  const searchBar = useSelector(
    (state: RootState) => state.optionsReducer.searchBar
  );

  const onSubmit = (event: any) => {
    event.preventDefault();
    formRef.current!.reset();
    dispatch(SiteActions.search([]));
    dispatch(optionsActions.changeSearchBar(false));
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    search(value);
    dispatch(optionsActions.changeSearchBar(value === '' ? false : true));
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
    if (searchText === '') return dispatch(SiteActions.search([]));
    if (process.env.NODE_ENV === 'development') {
      const local = searchLocal(searchText);
      dispatch(SiteActions.search(local));
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
        dispatch(SiteActions.search(filter));
      } catch (e) {
        const local = searchLocal(searchText);
        dispatch(SiteActions.search(local));
      }
    }
  }

  return (
    <form
      className={twMerge(
        'outline outline-3 hover:outline-peve-selected focus-within:outline-peve-selected outline-gray-600 flex flex-row items-center gap-2 border bg-gray-200 rounded-md px-2 h-8',
        searchBar &&
          (searchFolderLength > 0
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
