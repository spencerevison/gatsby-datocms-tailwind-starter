import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

const AboutPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <div className="container">
        <article
          dangerouslySetInnerHTML={{ __html: page.body }}
          className="prose sm:py-18 lg:prose-lg xl:prose-xl mx-auto py-12 max-w-7xl"
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
