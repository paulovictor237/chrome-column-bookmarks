import { TitleTag } from '@/app/components/common/title-tag';
import { NewTabMenu } from '@/app/components/header/components/new-tab';
import { ShowRecent } from '@/app/components/header/components/recent';
import { useMenuOptions } from '@/app/zustand/options';

export const LeftIcons = () => {
  const newTab = useMenuOptions((state) => state.newTab);
  return (
    <section className="flex gap-2 justify-between items-center h-full">
      <TitleTag
        title={newTab ? 'NewTab Enabled' : 'NewTab Disabled'}
        position="left"
      >
        <NewTabMenu />
      </TitleTag>
      <TitleTag title="Recent" position="left">
        <ShowRecent />
      </TitleTag>
    </section>
  );
};
