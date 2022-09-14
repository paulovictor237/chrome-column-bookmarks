import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';

type searchSitesType = (keyword: string, data: Folder) => Site[];
export const searchSites: searchSitesType = (keyword, data) => {
  let aux: Site[] = [];
  const recursive = (data: Folder, aux: any) => {
    if (data.children !== undefined && data.children.length > 0) {
      data.children.forEach((element: any) => recursive(element, aux));
    } else aux.push(data);
  };
  recursive(data, aux);
  const filter = aux.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase().trim())
  );
  return filter;
};

type searchChildrensType = (reference: {
  id: string;
  data: Folder;
  replace: (Folder | Site)[];
}) => void;

export const searchChildrens: searchChildrensType = ({ id, data, replace }) => {
  const recursive: searchChildrensType = ({ id, data, replace }) => {
    if (data.id === id) {
      if (replace) data.children = Array.from(replace);
      console.log(replace);
    }
    data.children.forEach((folder: any, index) => {
      if (folder.children !== undefined && folder.children.length > 0)
        recursive({ id, data: data.children[index] as Folder, replace });
    });
  };
  return recursive({ id, data, replace });
};
