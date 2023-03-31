import Logo from './Logo';

function SideBar() {
  return (
    <section className="transition-custom flex flex-col absolute top-0 left-[-260px] md:static w-[250px] z-[10000] bg-[#fbfcfd]">
      <Logo className="shadow-[0_0_3px_0_#c0c0c0]" />
      <div className="content-positioner flex-1 py-[20px] shadow-[3px_0_3px_-3px_#c0c0c0] text-[#3a5774]">
        Dashboard
      </div>
    </section>
  );
}

export default SideBar;
