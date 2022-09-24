import { Props } from './types';

export const ModalUi = ({ children }: Props) => {
  return (
    <div className="absolute h-screen w-screen bg-gray-800 bg-opacity-50 z-50">
      <div className="top-1/2 left-1/2 bottom-auto right-auto -translate-x-1/2 -translate-y-1/2 bg-peve-selected p-10 rounded-lg">
        {children}
      </div>
    </div>
  );
};
