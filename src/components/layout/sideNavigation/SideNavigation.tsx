import { IoAnalyticsOutline, IoPeopleOutline, IoRestaurantOutline } from 'react-icons/io5';
import { CiCalculator2 } from 'react-icons/ci';
import SideNavigationBlock from './SideNavigationBlock';

type tProps = {
  showSideNavigation: boolean;
};

function SideNavigation(props: tProps) {
  const left = props.showSideNavigation ? 'left-0' : 'left-[-280px]';
  const blocks = [
    {
      title: 'Dashboard',
      links: [
        { to: '/', icon: <CiCalculator2 />, text: 'Occupancy' },
        { to: '/guests', icon: <IoPeopleOutline />, text: 'Guests' },
      ],
    },
    {
      title: 'Operation',
      links: [
        { to: '/restaurant', icon: <IoRestaurantOutline />, text: 'Restaurant' },
        { to: '/analytics', icon: <IoAnalyticsOutline />, text: 'Analytics' },
      ],
    },
  ];

  return (
    <div
      className={`${left} content-positioner transition-custom scroll-bar z-[10000] overflow-auto md:static absolute py-[20px] md:mt-0 mt-[3rem] md:h-[100%] h-[calc(100%-3rem)] top-0 w-[270px] max-h-screen bg-[#f9f9f9] shadow-[3px_0_3px_-3px_#c0c0c0]`}
    >
      {blocks.map((block) => (
        <SideNavigationBlock key={block.title} title={block.title} links={block.links} />
      ))}
    </div>
  );
}

export default SideNavigation;
