import React from "react";
import { Link } from "gatsby";

const VARIANT_MAPS = {
  PRIMARY: "font-medium",
  STRONG: "font-bold",
};

export default function ButtonLink(props) {
  const { to, label, className = "", variant = VARIANT_MAPS.PRIMARY } = props;
  const commonClasses =
    "items-center justify-center px-4 py-2 font-medium text-white border border-transparent bg-primary whitespace-nowrap rounded-md hover:bg-primary-dark hover:text-white";
  return (
    <Link to={to} className={`${className} ${variant} ${commonClasses}`}>
      {label}
    </Link>
  );
}
ButtonLink.variant = VARIANT_MAPS;
