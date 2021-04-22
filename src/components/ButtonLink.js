import React from "react";
import { Link } from "gatsby";

const VARIANT_MAPS = {
  DEFAULT: "font-medium",
  STRONG: "font-bold",
};

export default function ButtonLink(props) {
  const { to, label, className, variant = VARIANT_MAPS.DEFAULT } = props;
  return (
    <Link
      to={to}
      className={`${className} ${variant} items-center justify-center px-4 py-2 font-medium text-white border border-transparent bg-primary whitespace-nowrap rounded-md hover:bg-primary-dark hover:text-white`}
    >
      {label}
    </Link>
  );
}
ButtonLink.variant = VARIANT_MAPS;
