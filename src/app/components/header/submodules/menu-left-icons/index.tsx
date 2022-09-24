import { TitleTag } from '@/app/components/common/title-tag';
import { ShowRecent } from '@/app/components/header/components/recent';
import { useMenuOptions } from '@/app/zustand/options';
import { LockEdit } from '../../components/lock-edit';

export const LeftIcons = () => {
  const locked = useMenuOptions((state) => state.lockedEdition);
  return (
    <section className="flex gap-2 justify-between items-center h-full">
      <TitleTag
        position="left"
        title={locked ? 'Locked edition' : 'Unlocked edition'}
      >
        <LockEdit />
      </TitleTag>
      <TitleTag title="Recent" position="left">
        <ShowRecent />
      </TitleTag>
    </section>
  );
};
