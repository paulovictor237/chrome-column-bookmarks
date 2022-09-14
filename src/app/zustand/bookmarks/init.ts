import { Folder } from '@/domain/entities/folder';

export const bookmark: Folder = {
  children: [],
  dateAdded: 0,
  dateGroupModified: 0,
  parentId: '0',
  id: '1',
  index: 0,
  title: 'Bookmark Bar',
};

export const searchFolder: Folder = {
  children: [],
  dateAdded: 0,
  dateGroupModified: 0,
  parentId: '0',
  id: 'search',
  index: -1,
  title: 'Search',
};

export const otherBookmark: Folder = {
  children: [],
  dateAdded: 0,
  dateGroupModified: 0,
  parentId: '0',
  id: '2',
  index: 1,
  title: 'Others Bookmark',
};
