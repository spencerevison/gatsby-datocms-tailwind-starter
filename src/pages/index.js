import React from "react";
import Layout from "components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle="Home">
      <Img className="w-full" alt="" fluid={page.heroImage.fluid} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    page: datoCmsHomePage {
      heroImage {
        fluid(maxWidth: 1180) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      heroTagline
      heroSubText
    }
  }
`;
