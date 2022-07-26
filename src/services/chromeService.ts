import bookmarksFixture from "../fixtures/peve.json";
import { NODE_ENV } from "../utils/constants";
import { delay } from "../utils/delay";
import { Bookmark } from "./../types/Bookmark";
import { ChromeBookmark } from "./../types/ChromeBookmark";
import { IS_LIVE_EXAMPLE } from "./../utils/constants";

export const getBookmarks = async () => {
  if (NODE_ENV === "development" || IS_LIVE_EXAMPLE) {
    await delay(100);
    return bookmarksFixture;
  } else {
    return new Promise<ChromeBookmark[]>(res => chrome.bookmarks.getTree(res));
  }
};