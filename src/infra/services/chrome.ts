import { BookmarkTreeNode } from '@/domain/entities/chrome';
import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import bookmarks from '@/infra/assets/bookmarks.json';
// import bookmarks from '@/infra/assets/dev.json';
// import bookmarks from '@/infra/assets/peve.json';
import { delay } from './delay';

type getBookmarks = (keyword: string) => Promise<BookmarkTreeNode[]>;
export const getBookmarks = async () => {
  const BookmarkTreeNode = await new Promise<BookmarkTreeNode[]>((res) =>
    chrome.bookmarks.getTree(res)
  );
  return BookmarkTreeNode;
};

type chromeSearch = (keyword: string) => Promise<Site[]>;
export const chromeSearch: chromeSearch = async (keyword) => {
  const local = await chrome.bookmarks.search(keyword);
  const filter = local.filter((item) => {
    return item.dateGroupModified === undefined && item.url !== undefined;
  });
  return filter as Site[];
};

type chromeRemove = (id: string) => void;
export const chromeRemove: chromeRemove = (id) => {
  chrome.bookmarks.remove(id);
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

// https://developer.chrome.com/docs/extensions/reference/bookmarks/#method-getRecent

// chrome.bookmarks.onChanged.addListener(
//   callback: (id: string, changeInfo: object) => void
// )

// chrome.bookmarks.create(
//   bookmark: CreateDetails,
//   callback?: function,
// )

// chrome.bookmarks.get(
//   idOrIdList: string | [string, ...string[]],
//   callback?: function,
// )
// chrome.bookmarks.getSubTree(
//   id: string,
//   callback?: function,
// )

// chrome.bookmarks.getTree(
//   callback?: function,
// )

// chrome.bookmarks.getChildren(
//   id: string,
//   callback?: function,
// )

// chrome.bookmarks.move(
//   id: string,
//   destination: object,
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
