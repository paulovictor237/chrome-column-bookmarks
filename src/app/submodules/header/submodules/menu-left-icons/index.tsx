import { TitleTag } from '@/app/components/title-tag';
import { useMenuOptions } from '@/app/zustand/options';
import { LockEdit } from '../../components/lock-edit';
import { ShowRecent } from '../../components/recent';

export const LeftIcons = () => {
  const locked = useMenuOptions((state) => state.lockedEdition);
  return (
    <section className="flex gap-2 justify-between items-center h-full">
      <TitleTag
        position="left"
        title={`${locked ? 'Locked' : 'Unlocked'} edition [Alt + L]`}
      >
        <LockEdit />
      </TitleTag>
      <TitleTag title="Recent" position="left">
        <ShowRecent />
      </TitleTag>
    </section>
  );
};
