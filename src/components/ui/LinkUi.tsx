import { useSelector } from 'react-redux';
import { getFaviconUrlV3 } from '../../services/getFaviconUrl';
import { RootState } from '../../store';
import { Site } from '../../types/Site';
import { Line } from '@/components/submodules/Line';

type Props = {
  link: Site;
};

export default function LinkUi({ link }: Props) {
  const { url, title, id } = link;
  const faviconSrc = url && getFaviconUrlV3(url);
  return (
    <Line id={id} title={title} link={url}>
      {url && (
        <img className="h-6 w-6 mr-3 rounded-sm" src={faviconSrc} alt="" />
      )}
    </Line>
  );
}
