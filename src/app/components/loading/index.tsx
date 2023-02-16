import { BiLoaderAlt } from 'react-icons/bi';

export const Loading = () => {
  return (
    <div className="z-10 absolute top-0 left-0 bg-slate-500 w-full h-full opacity-80 rounded-md">
      <div className="flex items-center justify-center w-full h-full animate-spin">
        <BiLoaderAlt size="6rem" />
      </div>
    </div>
  );
};
