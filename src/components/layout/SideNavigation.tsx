import { NavLink } from 'react-router-dom';
import { IoBookOutline } from 'react-icons/io5';
import { CiCalculator2 } from 'react-icons/ci';

type tProps = {
  showSideNavigation: boolean;
};

function SideNavigation(props: tProps) {
  const left = props.showSideNavigation ? 'left-0' : 'left-[-280px]';

  return (
    <div
      className={`${left} content-positioner transition-custom scroll-bar overflow-auto md:static absolute py-[20px] md:mt-0 mt-[3rem] md:h-[100%] h-[calc(100%-3rem)] top-0 w-[270px] max-h-screen bg-[#fafcfe] shadow-[3px_0_3px_-3px_#c0c0c0] z-[2]`}
    >
      <section className="side-navigation-block">
        <label className="side-navigation-label">Dashboard</label>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'side-navigation-link highlighted' : 'side-navigation-link'
          }
        >
          <CiCalculator2 />
          <span>Occupancy calculation</span>
        </NavLink>
        <NavLink
          to="/readme"
          className={({ isActive }) =>
            isActive ? 'side-navigation-link highlighted' : 'side-navigation-link'
          }
        >
          <IoBookOutline />
          <span>Read me</span>
        </NavLink>
      </section>
    </div>
  );
}

export default SideNavigation;
