import { Folder } from '../../types/Folder';
import { Site } from '../../types/Site';
import FolderUi from './FolderUi';
import LinkUi from './LinkUi';

type Props = {
  folder: Folder;
};

export default function Column(props: Props) {
  const { folder } = props;

  return (
    <div className='w-96 p-2 flex-shrink-0'>
      <div className='bg-dark700 rounded-2xl p-3 h-full overflow-y-auto sc2'>
        <div className='flex flex-col gap-3'>
          {folder.children?.map((item: Site | Folder) => {
            if ((item as Folder).children === undefined) {
              return <LinkUi key={item.id} link={item as Site} />
            } else {
              return <FolderUi key={item.id} folder={item as Folder} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
