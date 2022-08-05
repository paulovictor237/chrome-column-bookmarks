import bookmarks from "../fixtures/bookmarks.json";
import dev from "../fixtures/dev.json";
import peve from "../fixtures/peve.json";
import { delay } from "../utils/delay";
import { ChromeBookmark } from "./../types/ChromeBookmark";

export const getBookmarks = async () => {
  if (process.env.NODE_ENV === "development") {
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