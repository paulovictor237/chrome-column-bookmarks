import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SiteActions } from '../../store/booksmarkReducer';
import { optionsActions } from "../../store/optionsReducer";
import { Site } from "../../types/Site";
import { IS_LIVE_EXAMPLE, NODE_ENV } from "../../utils/constants";
import { MdOutlineClear } from 'react-icons/md';


export default function SearchBar() {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const Bookmark = useSelector((state: RootState) => state.siteReducer.Bookmark);

  const onSubmit = (event: any) => {
    event.preventDefault();
    formRef.current!.reset()
    dispatch(SiteActions.search([]))
    dispatch(optionsActions.changeSearchBar(false));
  }

  const handleChange = (event: any) => {
    const value = event.target.value;
    search(value);
    dispatch(optionsActions.changeSearchBar(value === '' ? false : true));
  }

  function searchLocal(searchText: string) {
    function recursive(object: any, search: Site[]) {
      if (object.children !== undefined && object.children.length > 0) {
        object.children.forEach((element: any) => {
          recursive(element, search)
        });
      } else {
        search.push(object);
      }
    }
    let local: Site[] = [];
    recursive(Bookmark, local);
    const filter = local.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    return filter
  }

  async function search(searchText: string) {
    if (searchText === '') return dispatch(SiteActions.search([]))
    if (NODE_ENV === "development" || IS_LIVE_EXAMPLE) {
      const local = searchLocal(searchText)
      dispatch(SiteActions.search(local))
    } else {
      try {
        const filter = await new Promise<any[]>(res => chrome.bookmarks.search(searchText, res));
        dispatch(SiteActions.search(filter))
      } catch (e) {
        const local = searchLocal(searchText)
        dispatch(SiteActions.search(local))
      }
    }
  }

  return (
    <form className="flex flex-row items-center gap-2 border bg-white rounded-md px-2"
      ref={formRef} onSubmit={onSubmit}>
      <input className="outline-none"
        type='text'
        // name='name'
        // ref={ref}
        // value={name}
        onChange={handleChange}
      />
      <span className="text-black">|</span>
      <button style={{ color: 'black' }} type="submit">
        <MdOutlineClear size={25} />
      </button>
    </form>
  );
}
