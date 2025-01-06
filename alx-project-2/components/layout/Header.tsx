import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="my-5 bg-slate-100 w-[85%] mx-auto">
      <ul className="flex justify-around items-center p-4 no-underline ">
        <li className="hover:text-red-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-red-300">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;