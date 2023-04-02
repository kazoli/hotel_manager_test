import { useEffect, useState } from 'react';
import { scrollTop } from '../../app/general/middlewares';
import { AiOutlineUpSquare } from 'react-icons/ai';

function JumpTop() {
  const [jumpTop, setJumpTop] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (element) {
      element.addEventListener('scroll', () => setJumpTop(element.scrollTop > 50));
    } else {
      setElement(document.querySelector('#jump-top-content'));
    }
  }, [element]);

  return (
    <>
      {jumpTop && element && (
        <AiOutlineUpSquare
          className="fixed bottom-[10px] right-[20px] bg-[#909090] hover:bg-[#4d7fb3] text-[2rem] text-[#ffffff] cursor-pointer transition-custom opacity-50 hover:opacity-100 z-[10000]"
          title="Jump top"
          onClick={() => scrollTop(element, 'smooth')}
        />
      )}
    </>
  );
}

export default JumpTop;
