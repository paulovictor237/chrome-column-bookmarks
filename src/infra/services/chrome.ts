import { BookmarkTreeNode } from '@/domain/entities/chrome';
import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import bookmarks from '@/infra/assets/bookmarks.json';
// import bookmarks from '@/infra/assets/dev.json';
// import bookmarks from '@/infra/assets/peve.json';
import { delay } from './delay';

export const getBookmarks = async () => {
  if (process.env.NODE_ENV === 'development') {
    await delay(100);
    return bookmarks;
  }
  try {
    const BookmarkTreeNode = await new Promise<BookmarkTreeNode[]>((res) =>
      chrome.bookmarks.getTree(res)
    );
    return BookmarkTreeNode;
  } catch (err) {
    console.log(err);
    return bookmarks;
  }
};

type chromeSearchType = (keyword: string) => Promise<Site[]>;
export const chromeSearch: chromeSearchType = async (keyword) => {
  const local = await chrome.bookmarks.search(keyword);
  const filter = local.filter((item) => {
    return item.dateGroupModified === undefined && item.url !== undefined;
  });
  return filter as Site[];
};
