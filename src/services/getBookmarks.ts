import bookmarks from "../fixtures/bookmarks.json";
import dev from "../fixtures/dev.json";
import peve from "../fixtures/peve.json";
import { NODE_ENV, VERCEL_ENV } from "../utils/constants";
import { delay } from "../utils/delay";
import { ChromeBookmark } from "./../types/ChromeBookmark";
import { IS_LIVE_EXAMPLE } from "./../utils/constants";

export const getBookmarks = async () => {
  if (NODE_ENV === "development" || VERCEL_ENV === "VERCEL" || IS_LIVE_EXAMPLE) {
    await delay(100);
    return bookmarks;
  } else {
    try {
      const chromeBookmark = await new Promise<ChromeBookmark[]>(res => chrome.bookmarks.getTree(res));
      return chromeBookmark;
    } catch (err) {
      console.log(err);
      return bookmarks;
    }
  }
};