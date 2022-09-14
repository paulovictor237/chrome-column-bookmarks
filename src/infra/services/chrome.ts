import { BookmarkTreeNode } from '@/domain/entities/chrome';
import { Site } from '@/domain/entities/site';
import bookmarks from '@/infra/assets/bookmarks.json';

type getBookmarks = (keyword: string) => Promise<BookmarkTreeNode[]>;
export const getBookmarks = async () => {
  try {
    return await new Promise<BookmarkTreeNode[]>((res) =>
      chrome.bookmarks.getTree(res)
    );
  } catch (error) {
    return bookmarks;
  }
};

type chromeSearch = (keyword: string) => Promise<Site[] | null>;
export const chromeSearch: chromeSearch = async (keyword) => {
  try {
    const local = await chrome.bookmarks.search(keyword);
    const filter = local.filter((item) => {
      return item.dateGroupModified === undefined && item.url !== undefined;
    });
    return filter as Site[];
  } catch (error) {
    return null;
  }
};

type chromeRemove = (id: string) => void;
export const chromeRemove: chromeRemove = (id) => {
  try {
    chrome.bookmarks.remove(id);
  } catch (error) {
    return;
  }
};

type chromeRecent = (number: number) => Promise<Site[]>;
export const chromeRecent: chromeRecent = async (number) => {
  try {
    const local = await chrome.bookmarks.getRecent(number);
    const filter = local.filter((item) => {
      return item.dateGroupModified === undefined && item.url !== undefined;
    });
    return filter as Site[];
  } catch (error) {
    return [];
  }
};

type chromeAddListener = (
  callback: (id?: string, changeInfo?: object) => void
) => Promise<void>;
export const chromeAddListener: chromeAddListener = async (callback) => {
  try {
    chrome.bookmarks.onChanged.addListener(callback);
    chrome.bookmarks.onChanged.addListener(callback);
    chrome.bookmarks.onChildrenReordered.addListener(callback);
    chrome.bookmarks.onCreated.addListener(callback);
    chrome.bookmarks.onImportBegan.addListener(callback);
    chrome.bookmarks.onImportEnded.addListener(callback);
    chrome.bookmarks.onMoved.addListener(callback);
    chrome.bookmarks.onRemoved.addListener(callback);
  } catch (error) {
    return;
  }
};

// https://developer.chrome.com/docs/extensions/reference/bookmarks/#method-getRecent

// chrome.bookmarks.create(
//   bookmark: CreateDetails,
//   callback?: function,
// )

// chrome.bookmarks.removeTree(
//   id: string,
//   callback?: function,
// )

// chrome.bookmarks.update(
//   id: string,
//   changes: {
//     title string optional
//     url string optional
//   },
//   callback?: function,
// )

// chrome.bookmarks.move(
//   id: string,
//   destination: object,
//   callback?: function,
// )

// chrome.bookmarks.get(
//   idOrIdList: string | [string, ...string[]],
//   callback?: function,
// )

// chrome.bookmarks.getTree(
//   callback?: function,
// )

// chrome.bookmarks.getSubTree(
//   id: string,
//   callback?: function,
// )

// chrome.bookmarks.getChildren(
//   id: string,
//   callback?: function,
// )
