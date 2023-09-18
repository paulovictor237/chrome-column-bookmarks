import { VITE_DEV_MODE } from '@/client/constants';
import { BookmarkTreeNode } from '@/infra/entities/chrome';
import { chromeCreate } from './chrome';

const createItem = (item: BookmarkTreeNode, id: string, isFirst = false) => ({
  parentId: id,
  index: isFirst ? 0 : item.index,
  title: item.title,
  url: item.url ?? '',
});

type Data = { item: BookmarkTreeNode; id: string; path?: string };
type Recursive = (data: Data) => Promise<void>;

export const createRecursive: Recursive = async ({ item, id, path = '' }) => {
  if (path === '') console.clear();

  console.log(path + (item.url ? '[L]' : '[F]'), item.title);

  const submit = createItem(item, id, path === '');

  const result = VITE_DEV_MODE ? { id: '' } : await chromeCreate(submit);

  if (item.children !== undefined && item.children.length > 0) {
    for (const child of item.children) {
      const data: Data = { item: child, id: result.id, path: path + ' └─' };
      await createRecursive(data);
    }
  }
  return;
};
