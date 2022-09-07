import { TitleTag } from '../../common/title-tag';
import { Settings } from '../components/settings';

export const RightIcons = () => {
  return (
    <section className="flex gap-2 justify-between items-center h-full">
      <TitleTag title="Github" position="left">
        <Settings />
      </TitleTag>
    </section>
  );
};
