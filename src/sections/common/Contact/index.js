import React from "react";
import { FiSend } from "react-icons/fi";

import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Heading from "reusecore/Heading";
import Button from "reusecore/Button";

import ContactWrapper from "./contact.style";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Container>
        <Box className="subscribe-from-block">
          <SectionTitle className="section-title" UniWidth="100%">
            <Heading as="h2">Subscribe to our newsletter</Heading>
            <Text>
              Subscribe to our newsletter to get latest news about our products,
              events and sales.
            </Text>
          </SectionTitle>
          <form name="contactform" method="post" action="#">
            <Box className="form-elements">
              <input type="email" placeholder="Enter your Email" />
              <Button>
                <FiSend />
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
