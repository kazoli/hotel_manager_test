import { NavLink } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';

type tProps = {
  className?: string;
};

function Logo(props: tProps) {
  return (
    <NavLink
      to="/"
      className={`${props.className} content-positioner flex gap-[5px] items-center cursor-pointer bg-[#fff] h-[3rem]`}
    >
      <FaHotel className="text-[1.5rem] text-[#4675a4]" />
      <span className="uppercase text-[#4675a4] text-[1.25rem]">Hotel Manager</span>
    </NavLink>
  );
}

export default Logo;
