import { useContextMenu } from '@/app/zustand/context-menu';
import { getSubTree } from '@/infra/services/chrome';
import { toast } from 'react-toastify';

export const Export = async (id: string) => {
  const data = await getSubTree(id);

  const json = JSON.stringify(data);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.json';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast('Delete successfully', { type: 'success' });
};
