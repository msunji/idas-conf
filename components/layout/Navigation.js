import { useState, useRef } from 'react';
import routes from '../../public/data/routes.json';
import Link from 'next/link';
import useOutsideClick from '../../utils/useOutsideClick';

const Dropdown = ({ page, links, dropdownRef, open, toggleDropdown }) => {
  return (
    <div className="relative">
      <a className="cursor-pointer" onClick={toggleDropdown}>
        {page}
      </a>
      <div className={`absolute flex flex-col ${open ? 'block' : 'hidden'}`}>
        {links.map(({ page, route }) => (
          <Link key={page} href={route}>
            <a>{page}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useOutsideClick(dropdownRef, false);

  const handleDropdownToggle = () => setOpenDropdown(!openDropdown);
  console.log(openDropdown);

  return (
    <nav className="fixed top-0 left-0 bg-transparent w-screen tracking-wide">
      <div className="container max-w-7xl py-10 flex justify-between items-center">
        <div className="leading-tight flex">
          <div className="w-6 h-6 bg-yellow rounded-full mr-2 -mt-2 self-start" />
          <Link href="/">
            <a className="text-blue100">
              <span className="tracking-widest font-semibold text-sm leading-[0]">
                2018 IDAS
              </span>
              <p className="text-2xl leading-[0.9rem] font-bold">Conference</p>
            </a>
          </Link>
        </div>

        <ul className="flex flex-col tablet:flex-row gap-8">
          {routes.map(({ page, route }) => (
            <li key={page}>
              <Link href={route}>
                <a>{page}</a>
              </Link>
            </li>
          ))}
        </ul>

        <button className="uppercase bg-magenta text-white">
          <span className="uppercase">Register</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
