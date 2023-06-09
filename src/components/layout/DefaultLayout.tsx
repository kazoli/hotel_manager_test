import { useState } from 'react';
import Header from './header/Header';
import SideNavigation from './sideNavigation/SideNavigation';
import JumpTop from './general/JumpTop';

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
        <div
          id="jump-top-content"
          className="content-positioner flex-[10000_10000_auto] scroll-bar overflow-auto"
        >
          {props.children}
        </div>
      </main>
      <JumpTop />
    </>
  );
}

export default DefaultLayout;
