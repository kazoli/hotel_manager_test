import SideBar from './SideBar';
import Header from './Header';
import Footer from './Footer';
import JumpTop from './JumpTop';

type tProps = {
  children: JSX.Element;
};

function DefaultLayout(props: tProps) {
  return (
    <main className="flex">
      <SideBar />
      <section id="scroll-content" className="flex-[10000_10000_auto] h-screen overflow-auto">
        <Header />
        <div className="content-positioner md:py-[20px] py-[10px] min-h-screen">
          {props.children}
        </div>
        <Footer />
      </section>
      <JumpTop />
    </main>
  );
}

export default DefaultLayout;
