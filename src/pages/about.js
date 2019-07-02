import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const about = () => {
  return (
    <Layout>
      <Head title="about" />
      <h1>About</h1>
      <p>Hi I'm Alison</p>
      <Link to="/contact">contact me</Link>
    </Layout>
  )
}

export default about
