import { Line } from '@/app/components/common/line';
import { RootState } from '@/app/reducer';
import { getFaviconUrlV3 } from '@/infra/services/getFaviconUrl';
import { useSelector } from 'react-redux';
import { Props } from './types';

export const LinkUi = ({ link }: Props) => {
  const { url, title, id } = link;
  const faviconSrc = url && getFaviconUrlV3(url);
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab);
  const enableEditor = useSelector(
    (state: RootState) => state.optionsReducer.enableEditor
  );

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
