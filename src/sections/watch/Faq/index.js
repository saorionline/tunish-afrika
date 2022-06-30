import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "reusecore/Accordion";

import FaqImage from "assets/images/watch/faq/01.png";
import particle1 from "assets/images/common/particle/07.png";
import particle2 from "assets/images/common/particle/08.png";

import data from "assets/data/faq";
import FaqSectionWrapper from "./faqSection.style";

const Faq = () => {
  return (
    <FaqSectionWrapper id="faq">
      <Image className="section__particle one" src={particle1} alt="img" />
      <Image className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col className="faq-thumb-block" xs={12} sm={6}>
            <Box className="faq-thumb">
              <Image
                src={FaqImage}
                className="bounce-element"
                alt="iproland faq"
              />
            </Box>
          </Col>
          <Col className="faq-content-block" xs={12} sm={6}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <Heading as="h4">Solution</Heading>
              <Heading as="h4">
                <Text as="span">Easy and perfect solution </Text> for this app
              </Heading>
            </SectionTitle>
            <Accordion>
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTitle>
                    <h5>{faq.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <IoIosArrowForward />
                      </OpenIcon>
                      <CloseIcon>
                        <IoIosArrowDown />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <Text>{faq.content}</Text>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
            <VintageBox right={true} vintageTwo={true} position="relative">
              <Button>Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
