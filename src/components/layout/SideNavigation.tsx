type tProps = {
  showSideNavigation: boolean;
};

function SideNavigation(props: tProps) {
  const left = props.showSideNavigation ? 'left-0' : 'left-[-280px]';

  return (
    <section
      className={`${left} content-positioner transition-custom scroll-bar overflow-auto md:static absolute py-[20px] md:mt-0 mt-[3rem] md:h-[100%] h-[calc(100%-3rem)] top-0 w-[270px] max-h-screen bg-[#f8fafc] shadow-[3px_0_3px_-3px_#c0c0c0] z-[2]`}
    >
      <div className="font-[500] text-[#4675a4] uppercase">Dashboard</div>
    </section>
  );
}

export default SideNavigation;
