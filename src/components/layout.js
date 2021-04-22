import React from "react";
import { Helmet } from "react-helmet";
import site from "site.config.json";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{`${pageTitle} | ${site.title}`}</title>
        <meta name="description" content={site.description} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
