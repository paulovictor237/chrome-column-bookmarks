import { Props } from './types';

export const TitleTag = ({ children, title, position }: Props) => (
  <div className="group transition-all duration-300 ease-linear text-peve-zinc hover:text-peve-selected cursor-pointer">
    {children}
    <div
      className={`absolute z-10 translate-y-2 bg-peve-selected w-auto p-2 m-2 min-w-max rounded-md shadow-md  text-xs font-bold transition-all duration-100 origin-left scale-0 group-hover:scale-100  md:block hidden ${
        position === 'right' ? 'right-0' : 'left-0'
      }`}
    >
      <span className="text-white">{title}</span>
    </div>
  </div>
);
