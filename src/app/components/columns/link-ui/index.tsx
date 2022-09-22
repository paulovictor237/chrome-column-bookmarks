import { Line } from '@/app/components/common/line';
import { useMenuOptions } from '@/app/zustand/options';
import { getFaviconUrlV3 } from '@/infra/services/getFaviconUrl';
import { Props } from './types';

export const SiteUi = ({ link }: Props) => {
  const { url, title, id } = link;
  const faviconSrc = url && getFaviconUrlV3(url);
  const newTab = useMenuOptions((state) => state.newTab);
  const enableEditor = useMenuOptions((state) => state.enableEditor);
  return (
    <a
      href={enableEditor ? undefined : link.url}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      draggable={false}
      role="button"
    >
      <Line id={id} title={title} link={url}>
        <img className="h-6 w-6 mr-3 rounded-sm" src={faviconSrc} alt="" />
      </Line>
    </a>
  );
};
