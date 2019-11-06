import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { FeaturedImage } from "../types/images";

const BlogRoll: React.FC<{ data: BlogRollStaticQueryProps }> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <article key={post.id} style={{ marginBottom: "1rem" }}>
            <header>
              {post.frontmatter.featuredimage && (
                <div>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`
                    }}
                  />
                </div>
              )}
              <h2>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h2>
              <p>{post.frontmatter.date}</p>
            </header>
            <p>{post.excerpt}</p>
            <p>
              <Link to={post.fields.slug}>
                Continue reading {post.frontmatter.title}
              </Link>
            </p>
          </article>
        ))}
    </div>
  );
};

interface BlogRollStaticQueryProps {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          excerpt: string;
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            templateKey: string;
            date: string;
            featuredpost: boolean;
            featuredimage: FeaturedImage;
          };
        };
      }
    ];
  };
}

export default () => (
  <StaticQuery<BlogRollStaticQueryProps>
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRoll data={data} />}
  />
);
