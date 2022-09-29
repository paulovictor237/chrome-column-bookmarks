import { Line } from '@/app/components/common/line';
import { useContextMenu } from '@/app/zustand/context-menu';
import { useMenuOptions } from '@/app/zustand/options';
import { getFaviconUrlV3 } from '@/infra/services/getFaviconUrl';
import { Props } from './types';

export const SiteUi = ({ link }: Props) => {
  const { url, title, id } = link;
  const faviconSrc = url && getFaviconUrlV3(url);
  const newTab = useMenuOptions((state) => state.newTab);
  const enableEditor = useMenuOptions((state) => state.enableEditor);
  const itemId = useContextMenu((state) => state.itemId);
  const onContextMenu = useContextMenu((state) => state.onContextMenu);
  const href = enableEditor || !(itemId === id) ? undefined : link.url;
  return (
    <a
      onContextMenu={(e) => onContextMenu(e, id)}
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      draggable={false}
      role="button"
    >
      <Line title={title} link={url} showMenu={itemId === id}>
        <img className="h-6 w-6 mr-3 rounded-sm" src={faviconSrc} alt="" />
      </Line>
    </a>
  );
};
