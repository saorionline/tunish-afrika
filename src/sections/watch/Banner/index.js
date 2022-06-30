import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import Particle from "reusecore/Particle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import { FiPlay, FiWatch } from "react-icons/fi";

import BannerSectionWrapper from "./banner.style";

import Img1 from "assets/images/watch/banner/01.png";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <Particle />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col sm={6} md={6} lg={7}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <Heading as="h4">30% off for first 50 sell</Heading>
              <Heading>You’ve never seen perceived a watch like this.</Heading>
            </SectionTitle>
            <Text>
              This is best the smart watch deal in this town. You can try first,
              you would love it. The Activity rings track your progress and
              inspire you to sit less, move more, and exercise every day.
            </Text>
            <Box>
              <Button className="banner-btn one">
                <FiWatch className="icon-left" />
                Get Your Watch
              </Button>
              <Button className="banner-btn two">
                <FiPlay className="icon-left" /> Watch Now
              </Button>
            </Box>
          </Col>
          <Col sm={6} md={6} lg={5}>
            <Box className="banner-img-block">
              <Image src={Img1} className="bounce-element" alt="banner-img" />
            </Box>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
