'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "@/styles/components/hamburger.css";
import "@/styles/components/navigation.css";


interface NavProps {
  links: {
    name: string;
    url: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const [isNavActive, setIsNavActive] = React.useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeNav();
    }
  };

  const pathname = usePathname();

  return (
    <div
      className={`main_nav${isNavActive ? " active" : ""}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}>

      <nav aria-label="Main navigation">
        <ul>
          {links.map((link) => (
            <li key={link.name} className={
              pathname === link.url || pathname.match(new RegExp(`^${link.url}/`)) ? 'nav-active' : ''}>
              <Link href={link.url} onClick={closeNav}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            {/* <MediaButtons /> */}
          </li>
        </ul>
      </nav>

      <div className={`hamburger${isNavActive ? " active" : ""}`} id="hamburger" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
};


export default Nav;
