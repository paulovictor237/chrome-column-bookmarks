import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SiteActions } from '../../store/booksmarkReducer';
import { Site } from "../../types/Site";
import { IS_LIVE_EXAMPLE, NODE_ENV } from "../../utils/constants";

export default function SearchBar() {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const Bookmark = useSelector((state: RootState) => state.siteReducer.Bookmark);

  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(SiteActions.search([]))
  }

  const handleChange = (event: any) => {
    search(event.target.value);
  }

  function recursive(object: any, search: Site[]) {
    if (object.children !== undefined && object.children.length > 0) {
      object.children.forEach((element: any) => {
        recursive(element, search)
      });
    } else {
      search.push(object);
    }
  }

  async function search(searchText: string) {
    if (NODE_ENV === "development" || IS_LIVE_EXAMPLE) {
      if (searchText === '') return dispatch(SiteActions.search([]))
      let search: Site[] = [];
      recursive(Bookmark, search);
      const filter = search.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
      dispatch(SiteActions.search(filter))
    } else {
      const filter = await new Promise<any[]>(res => chrome.bookmarks.search(searchText, res));
      dispatch(SiteActions.search(filter))
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input
        type='text'
        // name='name'
        // ref={ref}
        // value={name}
        onChange={handleChange}
      />
      <button onClick={() => formRef.current!.reset()} type="button">
        clear
      </button>
    </form>
  );
}
