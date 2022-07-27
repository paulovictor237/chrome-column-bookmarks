import { Folder } from '../../types/Folder';
import FolderBooks from './FolderBooks';
import LineLink from './LineLink';

type Props = {
  folder: Folder;
};

export default function Column(props: Props) {
  const { folder } = props;

  return (
    <div className='w-96 p-2'>
      <div className='bg-dark700 rounded-2xl p-3 h-full overflow-y-auto sc2'>
        <div className='flex flex-col gap-3'>
          {folder.children?.map((item: any) => {
            if (item.children === undefined) {
              return <LineLink key={item.id} link={item} />
            } else {
              return <FolderBooks key={item.id} folder={item} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
