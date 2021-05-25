import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import SEO from "../components/SEO";

const AboutPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <div className="container">
        <article
          dangerouslySetInnerHTML={{ __html: page.body }}
          className="py-12 mx-auto prose sm:py-18 lg:prose-lg xl:prose-xl max-w-7xl"
        />
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    page: datoCmsStandardPage(slug: { eq: "about" }, title: {}) {
      title
      body
    }
  }
`;
