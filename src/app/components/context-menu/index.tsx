import { useMauseEventMenu } from '@/app/hooks/useMauseEventMenu';
import { useContextMenu } from '@/app/zustand/context-menu';
import { MdDeleteForever, MdEdit, MdPushPin } from 'react-icons/md';
import { ContextMenuButton } from './components/button';

export const ContextMenu = () => {
  const showMenuId = useContextMenu((state) => state.showMenuId);
  const closeMenu = useContextMenu((state) => state.closeMenu);
  const { ref, globalCoords } = useMauseEventMenu(closeMenu);

  return (
    <>
      {showMenuId && (
        <section ref={ref} className="absolute z-50 w-28" style={globalCoords}>
          <div className="bg-peve-light border-warcraft-yellow flex flex-col gap-1.5  p-1.5 rounded-lg border-2 ">
            <ContextMenuButton
              name="update"
              icon={<MdPushPin />}
              onClick={() => console.log('update ' + showMenuId)}
            />
            <ContextMenuButton
              name="move"
              icon={<MdEdit />}
              onClick={() => console.log('move ' + showMenuId)}
            />
            <ContextMenuButton
              name="remove"
              icon={<MdDeleteForever />}
              onClick={() => console.log('remove ' + showMenuId)}
            />
          </div>
        </section>
      )}
    </>
  );
};
