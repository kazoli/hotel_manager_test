import { useState } from 'react';
import SideNavigation from './SideNavigation';
import JumpTop from './JumpTop';
import Header from './Header';

type tProps = {
  children: JSX.Element;
};

function DefaultLayout(props: tProps) {
  const [showSideNavigation, setShowSideNavigation] = useState(false);

  return (
    <>
      <Header
        showSideNavigation={showSideNavigation}
        setShowSideNavigation={setShowSideNavigation}
      />
      <main className="flex h-screen pt-[3rem]">
        <SideNavigation showSideNavigation={showSideNavigation} />
        <section
          id="jump-top-content"
          className="content-positioner md:py-[20px] py-[10px] flex-[10000_10000_auto] scroll-bar overflow-auto"
        >
          {props.children}
        </section>
        <JumpTop />
      </main>
    </>
  );
}

export default DefaultLayout;
