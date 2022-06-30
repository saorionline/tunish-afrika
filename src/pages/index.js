import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "components/layout"
import SEO from "components/seo"

// Watch sections import Here
import Banner from "sections/watch/Banner"
import About from "sections/watch/About"
import Features from "sections/watch/Features"
import Product from "sections/watch/Product"
import ProductCTA from "sections/watch/ProductCTA"
import Faq from "sections/watch/Faq"
import Integrations from "sections/watch/Integrations"
import Getapp from "sections/watch/Getapp"

// Common import Here
import Navigation from "sections/common/Navigation"
import Testimonial from "sections/common/Testimonial"
import News from "sections/common/News"
import Contact from "sections/common/Contact"
import Footer from "sections/common/Footer"

import { GlobalStyle } from "sections/watch/watch.style"
import theme from "theme/watch/themeStyles"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Navigation />
      <Banner />
      <Features />
      <About />
      <Integrations />
      <ProductCTA />
      <Product />
      <Testimonial />
      <Faq />
      <Getapp />
      <News />
      <Contact />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
