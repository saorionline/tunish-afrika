import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import imgAbout from "assets/images/watch/about/01.png";
import particle1 from "assets/images/common/particle/05.png";
import particle2 from "assets/images/common/particle/06.png";

import AboutSectionWrapper from "./about.style";

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <Image className="section__particle one" src={particle1} alt="img" />
      <Image className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <Image
              className="about-thumb bounce-element"
              src={imgAbout}
              alt="This is about UNI-Prime"
            />
          </Col>
          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <Heading as="h4"> About us </Heading>
              <Heading as="h2">
                <Text as="span">Starting with Ulex</Text> is easier than
                anything.
              </Heading>
            </SectionTitle>
            <Text className="about-text text-one">
              One differences leaders, management-science so, best treat. Still
              problems upper and anger devoting out. With hiding their boss
              phase drops. A strenuous in ticket get write it by proposal.
            </Text>
            <Text className="about-text text-two">
              Thought. Road, clearly, and software the shreds sisters contract,
              luxury and fully here
            </Text>
            <VintageBox right={true} vintageTwo={true} position="relative">
              <Button>Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
