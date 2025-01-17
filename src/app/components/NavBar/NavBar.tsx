"use client";
import { AiOutlineMenu } from "react-icons/ai";
import style from "./NavBar.module.css";
import Link from "next/link";
import NavBarDesktop from "./NavBarDesktop/NavBarDesktop";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import Image from "next/image";
import Logo from "/public/logo.webp";

import { useState } from "react";

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className={style.container}>
      <div className={style.navLogo}>
        <div className={style.logoImg}>
          <Link href="/">
            <Image src={Logo} width={36} height={36} alt="logo"></Image>
          </Link>
        </div>
        <Link href="/">
          <h1 className={style.logoHeading}>Js Matrix</h1>
        </Link>
      </div>

      <div>
        <button className={style.btnMenu} onClick={() => setShowSideBar(true)}>
          <AiOutlineMenu className="text-4xl" />
        </button>
        <div>
          <SideBarMobile
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        </div>
        <div className={style.navBarDesktop}>
          <NavBarDesktop />
        </div>
      </div>
    </nav>
  );
}
