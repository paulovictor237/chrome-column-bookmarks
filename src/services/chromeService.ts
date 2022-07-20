import { NODE_ENV } from "../config/constants";
import bookmarksFixture from "../fixtures/peve.json";
import { delay } from "../utils/delay";
import { IS_LIVE_EXAMPLE } from "./../config/constants";
import { Bookmark } from "./../types/Bookmark";
import { ChromeBookmark } from "./../types/ChromeBookmark";

export const getBookmarks = async () => {
  if (NODE_ENV === "development" || IS_LIVE_EXAMPLE) {
    await delay(100);
    return bookmarksFixture;
  } else {
    return new Promise<ChromeBookmark[]>(res => chrome.bookmarks.getTree(res));
  }
};

export const moveBookmark = async (
  bookmark: Bookmark,
  oldIndex: number,
  newIndex: number
) => {
  if (NODE_ENV === "development" || IS_LIVE_EXAMPLE) {
    return;
  } else {
    return new Promise<ChromeBookmark>(resolve => {
      // The Chrome move API seems to have a bug when you move a bookmark to
      // a position where the new index is greater than the current one.
      // Increasing the updated index position by 1 for this specific case
      // seems to fix the issue: https://stackoverflow.com/q/13264060/4836602
      let fixedNewIndex = newIndex;
      if (oldIndex < newIndex) {
        fixedNewIndex++;
      }
      chrome.bookmarks.move(
        bookmark.id,
        { index: fixedNewIndex, parentId: bookmark.parentId },
        resolve
      );
    });
  }
};
