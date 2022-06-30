import React from "react"
import { Link } from "gatsby"
import { TiMessageTyping, TiHeartOutline } from "react-icons/ti"

import { Container, Row, Col } from "reusecore/Layout"
import SectionTitle from "reusecore/SectionTitle"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"

import particle1 from "assets/images/common/particle/16.png"
import particle2 from "assets/images/common/particle/09.png"

import data from "assets/data/news"
import NewsSectionWrapper from "./newsSection.style"

const News = () => {
  return (
    <NewsSectionWrapper id="newsSection">
      <Image className="section__particle one" src={particle1} alt="img" />
      <Image className="section__particle two" src={particle2} alt="img" />
      <Container>
        <SectionTitle className="section-title" UniWidth="52%">
          <Heading as="h4">Blog post</Heading>
          <Heading as="h2">
            <Text as="span">Check our latest blog post </Text> for more update.
          </Heading>
        </SectionTitle>
        <Row>
          {data.map((post, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Box key={index} className="news-wrap">
                <Box className="thumb-block">
                  <Link to="/blog-single">
                    <Image src={post.image} alt="img" />
                  </Link>
                </Box>
                <Box className="post-meta-block">
                  {post.categories.map((category, i) => (
                    <Link key={i} to="/blog-single">
                      {" "}
                      {category}{" "}
                    </Link>
                  ))}
                  <Text as="span" className="Boxider">
                    /
                  </Text>
                  <Text as="span">{post.date}</Text>
                </Box>
                <Heading as="h2" className="title">
                  <Link to="/blog-single"> {post.title} </Link>
                </Heading>
                <Box className="post-reaction-block">
                  <Link to="/blog-single">
                    {" "}
                    <TiMessageTyping /> 05 Comment{" "}
                  </Link>
                  <Link to="/blog-single">
                    {" "}
                    <TiHeartOutline /> 152 Like{" "}
                  </Link>
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </NewsSectionWrapper>
  )
}

export default News
