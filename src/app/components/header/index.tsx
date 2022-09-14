import { LeftIcons } from './menu-left-icons';
import { RightIcons } from './menu-right-icons';
import { SearchBar } from './search-bar';

export const Header = () => {
  return (
    <div className="bg-peve-light flex items-center justify-between shadow-lg gap-2 p-2">
      <LeftIcons />
      <SearchBar />
      <RightIcons />
    </div>
  );
};
