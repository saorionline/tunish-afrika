import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text"; 

import data from "assets/data/watch/features";
import FeturesSectionWrapper from "./fetures.style";

const Features = () => {
  return (
    <FeturesSectionWrapper id="features">
      <Container fullWidthSM>
        <SectionTitle UniWidth="65%">
          <Heading as="h4">Amazing Features</Heading>
          <Heading as="h2">
            <Text as="span">Some of the best features </Text> you find in one
            watch.
          </Heading>
        </SectionTitle>
        <Row>
          {data.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Box className="fetures-block v1">
                <Box className="fetures-icon-block">{feature.icon}</Box>
                <Heading as="h3">{feature.title}</Heading>
                <Text> {feature.text} </Text>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </FeturesSectionWrapper>
  );
};

export default Features;
