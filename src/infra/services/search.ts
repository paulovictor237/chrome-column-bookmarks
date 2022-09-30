import { ColumnType } from '@/domain/entities/column';
import { Site } from '@/domain/entities/site';

export const searchLocalSites = (keyword: string, data: ColumnType): Site[] => {
  let aux: Site[] = [];
  const recursive = (data: ColumnType, aux: any) => {
    if (data.children !== undefined && data.children.length > 0) {
      data.children.forEach((element: any) => recursive(element, aux));
    } else aux.push(data);
  };
  recursive(data, aux);
  const filter = aux.filter((item) =>
    item.title?.toLowerCase().includes(keyword.toLowerCase().trim())
  );
  return filter;
};

export const searchLocalColumn = (id: string, data: ColumnType): ColumnType => {
  let aux: ColumnType = { id: id, title: '', children: [] };
  const recursive = (recData: ColumnType) => {
    if (recData.id === id) {
      return (aux = recData);
    }
    if (recData.children !== undefined && recData.children.length > 0) {
      recData.children.forEach((element: any) => recursive(element));
    }
  };
  recursive(data);
  return aux;
};
