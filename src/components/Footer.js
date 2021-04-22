import React from "react";
import { Facebook, Instagram } from "react-feather";
import Logo from "svg/logo.svg";
import site from "site.config.json";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="body-font text-gray-600">
      <div className="container flex flex-col items-center mx-auto px-5 py-8 sm:flex-row">
        <Link
          to="/"
          className="title-font flex items-center justify-center text-gray-900 font-medium md:justify-start"
        >
          <Logo className="p-2 w-10 h-10 text-white" />
          <span className="text-l ml-3">{site.title}</span>
        </Link>
        <p className="mt-4 text-gray-500 text-sm sm:ml-4 sm:mt-0 sm:pl-4 sm:py-2 sm:border-l-2 sm:border-gray-200">
          © 2021 {site.author}
        </p>
        <span className="inline-flex justify-center mt-4 sm:justify-start sm:ml-auto sm:mt-0">
          <a className="text-gray-500" href="#">
            <Facebook className="w-5 h-5" />
          </a>
          <a className="ml-3 text-gray-500" href="#">
            <Instagram className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}
