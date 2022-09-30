import { Line } from '@/app/components/columns/line';
import { useContextMenu } from '@/app/zustand/context-menu';
import { useMenuOptions } from '@/app/zustand/options';
import { VITE_SHOW_ID } from '@/domain/constants';
import { getFaviconUrlV3 } from '@/infra/services/getFaviconUrl';
import { Props } from './types';

export const SiteUi = ({ link }: Props) => {
  const { url, title, id } = link;
  const faviconSrc = url && getFaviconUrlV3(url);
  const newTab = useMenuOptions((state) => state.newTab);
  const locked = useMenuOptions((state) => state.lockedEdition);
  const itemId = useContextMenu((state) => state.item?.id);
  const onContextMenu = useContextMenu((state) => state.onContextMenu);

  return (
    <a
      onContextMenu={(e) => !locked && onContextMenu(e, link)}
      href={locked ? link.url : undefined}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      draggable={false}
      role="button"
    >
      <Line title={title} link={url} showMenu={itemId === id}>
        <img className="h-6 w-6 mr-3 rounded-sm" src={faviconSrc} alt="" />
        {VITE_SHOW_ID && <pre>[{id}]-</pre>}
      </Line>
    </a>
  );
};
