import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Popover } from "@headlessui/react";
import { Link } from "gatsby";
import site from "../site.config.json";
import Logo from "../../static/images/svg/logo.svg";
import { MenuIcon } from "@heroicons/react/outline";
import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <Popover className="container relative py-2 bg-white sm:py-4">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between md:justify-start md:space-x-10">
              <div className="flex justify-start lg:flex-1 lg:w-0">
                <Link to="/" className="h-7 sm:h-8 md:h-10">
                  <span className="sr-only">{site.title}</span>
                  <Logo className="w-auto h-full" />
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-primary focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                {site.nav.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="text-gray-500 text-base font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <ButtonLink
                  to={site.cta.path}
                  label={site.cta.title}
                  className="inline-flex ml-8"
                />
              </div>
            </div>
            <HamburgerMenu open={open} />
          </>
        )}
      </Popover>
    </header>
  );
}
