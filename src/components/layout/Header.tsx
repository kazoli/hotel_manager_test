import { RiMenuUnfoldLine } from 'react-icons/ri';
import Logo from './Logo';

function Header() {
  return (
    <header className="sticky top-0 flex items-center bg-[#fbfcfd] shadow-[0_0_3px_0_#c0c0c0] h-[3rem]">
      <div className="content-positioner md:hidden">
        <RiMenuUnfoldLine className="text-[1.5rem] outline-none text-[#777]" />
      </div>
      <Logo className="md:hidden shadow-[3px_0_3px_-3px_#c0c0c0,-3px_0_3px_-3px_#c0c0c0]" />
      <div className="content-positioner flex-1 flex items-center justify-between"></div>
    </header>
  );
}

export default Header;
