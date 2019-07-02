import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const edges = data.allContentfulBlogPost.edges
  const blogPostOverviews = edges.map(edge => (
    <li className={styles.post}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
      </Link>
    </li>
  ))

  // */
  return (
    <Layout>
      <Head title="Blog" />
      <h1> Blog</h1>
      <ol className={styles.posts}>{blogPostOverviews}</ol>
    </Layout>
  )
}

export default BlogPage
