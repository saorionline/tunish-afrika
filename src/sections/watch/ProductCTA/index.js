import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"

import Product1 from "assets/images/watch/productCTA/01.png"
import ProductCTASectionWrapper from "./productCTASection.style"

const ProductCTA = () => {
  return (
    <ProductCTASectionWrapper id="productCTA">
      <Image src={Product1} alt="img" className="particle" />
      <Container>
        <Row>
          <Col xs={12}>
            <Box className="productCTA-block">
              <Heading as="h2">Available in Store</Heading>
              <Text>
                Choose a case and pair any band in the Owl Watch Studio with
                your favourate color
              </Text>
              <Link to="/product-single">
                <Text as="span" className="gradient-text">
                  ADD TO CART
                </Text>
              </Link>
            </Box>
          </Col>
        </Row>
      </Container>
    </ProductCTASectionWrapper>
  )
}

export default ProductCTA
