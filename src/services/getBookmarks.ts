import { Folder } from 'types/Folder';
import bookmarks from '../fixtures/bookmarks.json';
// import bookmarks from "../fixtures/dev.json";
// import bookmarks from "../fixtures/peve.json";
import { delay } from '../utils/delay';
import { ChromeBookmark } from './../types/ChromeBookmark';

export const getBookmarks = async () => {
  if (process.env.NODE_ENV === 'development') {
    await delay(100);
    return bookmarks;
  } else {
    try {
      const chromeBookmark = await new Promise<ChromeBookmark[]>((res) =>
        chrome.bookmarks.getTree(res)
      );
      return chromeBookmark;
    } catch (err) {
      console.log(err);
      return bookmarks;
    }
  }
};

export const moveBookmark = async (
  // bookmark: Bookmark,
  bookmark: Folder,
  oldIndex: number,
  newIndex: number
) => {
  if (process.env.NODE_ENV === 'development') {
    return;
  } else {
    return new Promise<ChromeBookmark>((resolve) => {
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
