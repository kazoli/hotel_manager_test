import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type tProps = {
  title: string;
  links: { to: string; icon: ReactNode; text: string }[];
};

function SideNavigationBlock(props: tProps) {
  return (
    <section className="side-navigation-block">
      <label className="side-navigation-label">{props.title}</label>
      {props.links.map((link) => (
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            isActive ? 'side-navigation-link highlighted' : 'side-navigation-link'
          }
        >
          {link.icon}
          <span>{link.text}</span>
        </NavLink>
      ))}
    </section>
  );
}

export default SideNavigationBlock;
