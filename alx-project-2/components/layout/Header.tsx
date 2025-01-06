import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-around items-center p-4 no-underline ">
        <li className="hover:text-gray-300">
          <Link href="/home">Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
