import { useContextMenu } from '@/client/zustand/context-menu';
import { useMenuOptions } from '@/client/zustand/options';
import { VITE_SHOW_ID } from '@/client/constants';
import { getFaviconUrlV3 } from '@/infra/services/getFaviconUrl';
import { Props } from './types';
import { Line } from '../../molecules/folder-line';

export const SiteUi = ({ link }: Props) => {
  const { url, title, id } = link;
  const faviconSrc = url && getFaviconUrlV3(url);
  const newTab = useMenuOptions((state) => state.newTab);
  const locked = useMenuOptions((state) => state.lockedEdition);
  const itemId = useContextMenu((state) => state.item?.id);

  return (
    <a
      href={locked ? link.url : undefined}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      draggable={false}
      role="button"
    >
      <Line title={title} link={url} showMenu={itemId === id} item={link}>
        <img className="h-6 w-6 mr-3 rounded-sm" src={faviconSrc} alt="" />
        {VITE_SHOW_ID && <pre>[{id}]-</pre>}
      </Line>
    </a>
  );
};
