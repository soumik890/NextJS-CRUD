import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="w-full md:w-[70%] py-3 px-2 mx-auto shadow-md">
        <nav className="w-full flex justify-between items-center">
          <Link href={"/"} className="font-bold text-2xl">
            Crud App
          </Link>

          <ul className="flex gap-x-4 font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
