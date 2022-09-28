import { BookmarkTreeNode } from '@/domain/entities/chrome';
import { ColumnType, ColumnChildren } from '@/domain/entities/column';
import { Site } from '@/domain/entities/site';
import bookmarks from '@/infra/assets/bookmarks.json';

export const chromeGetBookmarks = async (): Promise<BookmarkTreeNode[]> => {
  try {
    return await new Promise<BookmarkTreeNode[]>((res) =>
      chrome.bookmarks.getTree(res)
    );
  } catch (error) {
    return bookmarks;
  }
};

export const chromeGetChildren = async (
  id: string
): Promise<ColumnChildren> => {
  try {
    return (await new Promise<BookmarkTreeNode[]>((res) =>
      chrome.bookmarks.getChildren(id, res)
    )) as ColumnChildren;
  } catch (error) {
    return Promise.reject();
  }
};

export const chromeGet = async (idOrIdList: string): Promise<Site> => {
  try {
    const data = await new Promise<BookmarkTreeNode[]>((res) =>
      chrome.bookmarks.get(idOrIdList, res)
    );
    return data[0];
  } catch (error) {
    return Promise.reject();
  }
};

export const chromeMove = async (
  id: string,
  destination: {
    index?: number;
    parentId?: string;
  }
): Promise<BookmarkTreeNode> => {
  try {
    return await new Promise<BookmarkTreeNode>((res) =>
      chrome.bookmarks.move(id, destination, res)
    );
  } catch (error) {
    return Promise.reject();
  }
};

export const chromeSearch = async (keyword: string): Promise<Site[]> => {
  try {
    const local = await chrome.bookmarks.search(keyword);
    const filter = local.filter((item) => {
      return item.dateGroupModified === undefined && item.url !== undefined;
    });
    return filter as Site[];
  } catch (error) {
    return Promise.reject();
  }
};

export const chromeRemove = async (id: string): Promise<void> => {
  try {
    await chrome.bookmarks.remove(id);
  } catch (error) {
    return;
  }
};

export const chromeRecent = async (number: number): Promise<Site[]> => {
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

export const chromeAddListener = async (
  callback: (id?: string, changeInfo?: object) => void
): Promise<void> => {
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
