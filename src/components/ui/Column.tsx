import { Folder } from '../../types/Folder';
import { Site } from '../../types/Site';
import FolderUi from './FolderUi';
import LinkUi from './LinkUi';

type Props = {
  folder: Folder,
  index: number
};

export default function Column(props: Props) {
  const { folder, index } = props;

  return (
    <div className='w-80 p-2 flex-shrink-0'>
      <div className='bg-dark700 rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg'>
        <div className='flex flex-col gap-3'>
          {folder.children?.map((item: Site | Folder) => {
            if ((item as Folder).children === undefined) {
              return <LinkUi key={item.id} link={item as Site} />
            } else {
              return <FolderUi key={item.id} folder={item as Folder} index={index} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
