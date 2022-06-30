import React from "react"
import { Link } from "gatsby"

import { FiMail, FiPhoneCall } from "react-icons/fi"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"
import { List, ListItem } from "reusecore/List"

import logo from "assets/images/common/logo-white.png"

import FotterWrapper from "./footer.style"

const Footer = () => {
  return (
    <FotterWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Box className="footer-widgets first">
              <Link to="/" className="footer-logo">
                <Image src={logo} alt="logo" />
              </Link>
              <List className="info">
                <ListItem>
                  <FiMail />
                  <a href="mailto:contact@iproland.com">contact@iproland.com</a>
                </ListItem>
                <ListItem>
                  <FiPhoneCall />
                  <a href="tel:1-562-867-5309">+1-562-867-5309</a>
                </ListItem>
              </List>

              <List className="social">
                <ListItem>
                  <Link to="/">
                    {" "}
                    <FaFacebookF />{" "}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/">
                    {" "}
                    <FaTwitter />{" "}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/">
                    {" "}
                    <FaLinkedinIn />{" "}
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Box className="footer-widgets">
              <Heading as="h3" className="widget-title">
                Services
              </Heading>
              <List className="widget-catagory">
                <ListItem>
                  <Link to="/"> Web Developments </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> UX/UI Design </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> Graphic Design </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> Software Development </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> Contact </Link>
                </ListItem>
              </List>
            </Box>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Box className="footer-widgets">
              <Heading as="h3" className="widget-title">
                About Us
              </Heading>
              <List className="widget-catagory">
                <ListItem>
                  <Link to="/"> About Us </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> Work Portfolio </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> Team </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> Plan & Pricing </Link>
                </ListItem>
                <ListItem>
                  <Link to="/"> Company News </Link>
                </ListItem>
              </List>
            </Box>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Box className="footer-widgets">
              <Heading as="h3" className="widget-title">
                Our Address
              </Heading>
              <Text>
                1370 Roosevelt Street, <br />
                Little York City, New Jersey <br />
                08834
              </Text>
            </Box>
          </Col>
        </Row>
        <Box className="footer-bottom">
          <List className="footer-menu">
            <ListItem>
              <Link to="/"> Terms </Link>
            </ListItem>
            <ListItem>
              <Link to="/"> Condition </Link>
            </ListItem>
            <ListItem>
              <Link to="/"> Contact </Link>
            </ListItem>
            <ListItem>
              <Link to="/"> Help </Link>
            </ListItem>
          </List>
          <Text className="copyright-text">
            Copyright @<Link to="/"> Devscorn </Link>| All Right Reserved 2020
          </Text>
        </Box>
      </Container>
    </FotterWrapper>
  )
}

export default Footer
