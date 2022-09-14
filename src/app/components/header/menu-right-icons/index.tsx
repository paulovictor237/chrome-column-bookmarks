import { TitleTag } from '../../common/title-tag';
import { Settings } from '../components/settings';
import { ShowRecent } from '../components/switch-recent';

export const RightIcons = () => {
  return (
    <section className="flex gap-2 justify-between items-center h-full">
      <TitleTag title="Github" position="left">
        <Settings />
      </TitleTag>
      <TitleTag title="Recent" position="left">
        <ShowRecent />
      </TitleTag>
    </section>
  );
};
