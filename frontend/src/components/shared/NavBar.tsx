"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/shared/Footer";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const toggleMobileOpen = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const nav = navRef.current;
    if (nav == null) return;
    nav.classList.toggle("open", mobileOpen);
  }, [navRef, mobileOpen]);

  const menuItems = {
    Home: "/",
    // About: "/about",
    // Work: "/work",
    // Resume: "/resume",
    Contact: "/contact",
  };
  const animationObjects = 20;
  const animationDuration = "duration-[350ms]";
  const animationDelays = [
    `group-[.open]/nav:delay-[225ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[285ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[345ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[405ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[465ms] ${animationDuration}`,
  ];

  return (
    <nav ref={navRef} className="group/nav">
      <div className="container relative z-20 grid grid-cols-2 items-center md:grid-cols-[repeat(3,max-content)] md:justify-between lg:grid-cols-3">
        <div className="text-nowrap">
          <Link
            onClick={() => setMobileOpen(false)}
            href="/"
            className="group select-none text-xl font-bold text-red-primary-500 lg:text-2xl"
          >
            <span className="inline-block text-blue-800 transition-all group-hover:-rotate-6 group-[.open]/nav:text-grey-100">
              dev
            </span>
            <span className="inline-block transition-transform delay-150 group-hover:-rotate-6">
              pascal
            </span>
          </Link>
        </div>
        <ul className="container pointer-events-none invisible absolute top-[300%] flex w-full flex-col items-start gap-10 justify-self-start overflow-hidden text-lg font-medium group-[.open]/nav:pointer-events-auto group-[.open]/nav:visible md:pointer-events-auto md:visible md:static md:top-0 md:mx-0 md:flex md:w-auto md:flex-row md:items-center md:justify-self-center md:overflow-visible md:px-0 md:text-base">
          {Object.entries(menuItems).map(([routeName, route], n) => (
            <li key={n} className="select-none group-[.open]/nav:w-full">
              <Link
                onClick={() => setMobileOpen(false)}
                href={route}
                className={`flex items-center justify-between gap-5 font-semibold transition-colors hover:text-red-primary-500 ${pathname == route ? "text-red-primary-500" : "text-red-primary-900 group-[.open]/nav:text-grey-100 group-[.open]/nav:hover:text-red-primary-500"}`}
              >
                <p
                  className={`block transition-transform md:transition-none ${animationDelays[n]} -translate-x-44 group-[.open]/nav:translate-x-0 md:translate-x-0`}
                >
                  {routeName}
                </p>
                <hr
                  className={`block opacity-0 group-[.open]/nav:opacity-100 md:hidden ${animationDelays[n]} w-full border-b-0 border-l-0 border-r-0 border-t-[2px] border-dashed transition-opacity`}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  size="lg"
                  className={`block opacity-0 transition-[transform,_opacity] md:hidden ${animationDelays[n]} translate-x-44 group-[.open]/nav:translate-x-0 group-[.open]/nav:opacity-100`}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 justify-self-end">
          <button className="text-red-primary-900 transition-colors hover:text-red-primary-600 group-[.open]/nav:text-grey-100 group-[.open]/nav:hover:text-red-primary-600">
            <FontAwesomeIcon icon={faMoon} size="lg" />
          </button>
          <button
            onClick={toggleMobileOpen}
            className="flex flex-col justify-center gap-[3px] text-red-primary-900 transition-all delay-200 hover:text-red-primary-600 group-[.open]/nav:rotate-45 group-[.open]/nav:text-grey-100 group-[.open]/nav:delay-0 group-[.open]/nav:hover:text-red-primary-600 md:hidden"
          >
            <div className="h-[3px] w-4 rounded bg-current transition-all group-[.open]/nav:translate-y-1.5 group-[.open]/nav:opacity-0"></div>
            <div className="relative h-[3px] w-6 rounded bg-current">
              <div className="absolute h-[3px] w-6 rounded bg-current transition-transform group-[.open]/nav:-rotate-90 group-[.open]/nav:delay-0"></div>
            </div>
            <div className="h-[3px] w-3 rounded bg-current transition-all group-[.open]/nav:-translate-y-1.5 group-[.open]/nav:opacity-0"></div>
          </button>
        </div>
      </div>
      <div className="grid-rows-20 h-screen-fallback pointer-events-none invisible fixed inset-0 z-10 grid w-full select-none overflow-hidden transition-all delay-300 group-[.open]/nav:pointer-events-auto group-[.open]/nav:visible group-[.open]/nav:delay-0">
        {[...Array(animationObjects)].map((_, n) => (
          <div
            key={n}
            className={`bg-grey-900 transition-transform duration-300 group-[.open]/nav:translate-x-0 ${n % 2 == 0 ? "translate-x-full " : "-translate-x-full "}`}
          ></div>
        ))}
        <div className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 text-grey-100 group-[.open]/nav:block">
          <Footer
            classNameIcons="transition-all group-[.open]/nav:delay-[465ms] duration-[350ms] group-[.open]/nav:translate-y-0 group-[.open]/nav:opacity-100 translate-y-12 opacity-0"
            classNameCopy="transition-all group-[.open]/nav:delay-[500ms] duration-[350ms] group-[.open]/nav:translate-y-0 group-[.open]/nav:opacity-100 translate-y-12 opacity-0"
          />
        </div>
      </div>
    </nav>
  );
}
