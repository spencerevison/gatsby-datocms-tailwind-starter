import React from "react";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import site from "../site.config.json";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO titleTemplate={site.title} />
      <GatsbyImage
        className="w-full"
        alt=""
        image={page.heroImage.gatsbyImageData}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    page: datoCmsHomePage {
      heroImage {
        gatsbyImageData(
          placeholder: BLURRED
          imgixParams: {
            duotone: "88363B,F1E4FF"
            duotoneAlpha: 60
            fit: "crop"
          }
        )
      }
      heroTagline
      heroSubText
    }
  }
`;
