import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
import Logo from './Logo';

type tProps = {
  showSideNavigation: boolean;
  setShowSideNavigation: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header(props: tProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100000] flex items-center bg-[#fdfeff] shadow-[0_0_3px_0_#c0c0c0] h-[3rem]">
      <div
        className="content-positioner md:hidden"
        onClick={() => props.setShowSideNavigation(!props.showSideNavigation)}
      >
        {props.showSideNavigation ? (
          <RiMenuFoldLine className="header-icon" />
        ) : (
          <RiMenuUnfoldLine className="header-icon" />
        )}
      </div>
      <Logo className="md:w-[270px] shadow-[3px_0_3px_-3px_#c0c0c0,-3px_0_3px_-3px_#c0c0c0]" />
      <div className="content-positioner flex-1 flex items-center justify-between"></div>
    </header>
  );
}

export default Header;
