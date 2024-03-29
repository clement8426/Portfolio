"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useScrollEffect } from "@/hooks/useScroll";

const navLinks = [
  { id: 1, name: "Home", route: "#home" },
  { id: 2, name: "Projects", route: "#projects" },
  { id: 3, name: "Skills", route: "#skills" },
  { id: 4, name: "Contact", route: "#contact" },
];

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const isScrolling = useScrollEffect();

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav
      className={`w-full top-0 z-[99999] py-5 ${
        isScrolling
          ? "fixed top-0 bg-white shadow-lg transition duration-500"
          : "relative"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
        <Link href={"#home"}>
          <h1 className="text-3xl text-[#de3136] font-bold">Clement</h1>
        </Link>

        <ul
          className={`flex gap-10 max-md:hidden ${
            isScrolling ? "text-black" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className="hover:underline hover:text-[#de3136] transition duration-500"
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>

        <div
          className={`md:hidden text-3xl cursor-pointer ${
            isScrolling ? "text-[#de3136]" : "text-white"
          }`}
          onClick={handleOpenMobileMenu}
        >
          {openMobileMenu ? <MdClose /> : <FiMenu />}
        </div>

        {openMobileMenu && (
          <ul className="md:hidden bg-[#de3136] absolute top-14 right-5 px-4 py-6 text-center rounded-md flex flex-col gap-3 shadow-md">
            {navLinks.map((link) => (
              <Link href={link.route} key={link.id}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
