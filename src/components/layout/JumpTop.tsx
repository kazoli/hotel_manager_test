import { useEffect, useState } from 'react';
import { scrollTop } from '../../app/general/middlewares';
import { AiOutlineUpSquare } from 'react-icons/ai';

function JumpTop() {
  const [jumpTop, setJumpTop] = useState(false);
  const element = document.getElementById('scroll-content');

  useEffect(() => {
    if (element) {
      element.addEventListener('scroll', () => setJumpTop(element.scrollTop > 200));
    }
  }, [element]);

  return (
    <>
      {jumpTop && element && (
        <AiOutlineUpSquare
          className="fixed bottom-[15px] right-[15px] bg-[#909090] hover:bg-[#476b8f] text-[2rem] text-[#ffffff] cursor-pointer transition-custom opacity-50 hover:opacity-100 z-[10000]"
          title="Jump top"
          onClick={() => scrollTop(element, 'smooth')}
        />
      )}
    </>
  );
}

export default JumpTop;
