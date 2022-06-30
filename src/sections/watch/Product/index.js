import React from "react"
import { Link } from "gatsby"
import { FiStar } from "react-icons/fi"

import { Container, Row, Col } from "reusecore/Layout"
import SectionTitle from "reusecore/SectionTitle"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"

import data from "assets/data/watch/shop"
import ProductSectionWrapper from "./productSection.style"

const Product = () => {
  return (
    <ProductSectionWrapper id="product">
      <Container>
        <SectionTitle UniWidth="65%">
          <Heading as="h4">Product Section</Heading>
          <Heading as="h2">
            <Text as="span">Choose your best plan </Text> For adorable pricing history.
          </Heading>
        </SectionTitle>
        <Row>
          {data.map((product, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <Box className="product-block">
                <Box className="product-thumb-block">
                  <Image src={product.image} alt="product" />
                  <Link to="/product-single">
                    <Text as="span" className="gradient-text">
                      Shop Now
                    </Text>
                  </Link>
                  <div className="overlay"></div>
                </Box>
                <Box className="product-info">
                  <Heading as="h3">{product.name}</Heading>
                  <Text as="span" className="rattings">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </Text>
                  <Box className="product-price-block">
                    <Text as="span" className="off-price">
                      {" "}
                      {product.offPrice}{" "}
                    </Text>
                    <Text as="span" className="on-price">
                      {product.onPrice}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </ProductSectionWrapper>
  )
}

export default Product
