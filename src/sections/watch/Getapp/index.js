import React from "react"
import { Link } from "gatsby"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa" 

import { Container, Row, Col } from "reusecore/Layout" 
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"

import getAppImage from "assets/images/watch/getapp/get-app.png"
import particle1 from "assets/images/common/particle/09.png"
import particle2 from "assets/images/common/particle/10.png"
import particle3 from "assets/images/common/particle/11.png"
import particle4 from "assets/images/common/particle/13.png"

import GetAppSectionWrap from "./getAppSection.style"

const GetApp = () => {
  return (
    <GetAppSectionWrap>
      <Image className="section__particle one" src={particle1} alt="img" />
      <Image className="section__particle two" src={particle2} alt="img" />
      <Image className="section__particle three" src={particle3} alt="img" />
      <Image className="section__particle four" src={particle4} alt="img" />
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <Box className="getapp-block">
              <Heading as="h3">Get the app now!</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim veniam quis nostrud exercitation.
              </Text>
              <Box className="btn-block">
                <Link to="#" className="getapp-btn apl-btn">
                  {" "}
                  <DiAppstore />
                  <Text>
                    Download iphone App
                    <Text as="span">App Store</Text>
                  </Text>{" "}
                </Link>

                <Link to="#" className="getapp-btn">
                  {" "}
                  <FaGooglePlay />
                  <Text>
                    Get it On
                    <Text as="span">Google Play Store</Text>
                  </Text>{" "}
                </Link>
              </Box>
            </Box>
          </Col>
          <Col xs={12} sm={6}>
            <Box className="getapp-thumb">
              <Image src={getAppImage} alt="iproland testimonial" />
            </Box>
          </Col>
        </Row>
      </Container>
    </GetAppSectionWrap>
  )
}

export default GetApp
