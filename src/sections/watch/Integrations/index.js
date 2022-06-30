import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout"
import SectionTitle from "reusecore/SectionTitle"
import VintageBox from "reusecore/VintageBox"
import Button from "reusecore/Button"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"

import Icon from "assets/images/common/integrations/arrow.png"
import data from "assets/data/watch/integrations"
import IntegrationItemWrwatcher from "./integrationSection.style"

const Integrations = () => {
  return (
    <IntegrationItemWrwatcher>
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <Box className="integration__block__wrap">
              {data.map((items, index) => (
                <Box
                  key={index}
                  className={`integration__block ${index === 1 ? "right" : ""}`}
                >
                  {items.map((item, i) => (
                    <Box key={i} className="integration__block__inner">
                      {item.icon}
                      <Heading as="h3">{item.title}</Heading>
                      <Text>See More</Text>
                      <Link to="#">
                        <Image src={Icon} alt="watchion watch" />
                      </Link>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Col>
          <Col xs={12} sm={6} className="integration-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <Heading as="h4">Why Ulex</Heading>
              <Heading as="h2">
                <Text as="span">Uses for this watch </Text> In the perfect
                integration.
              </Heading>
            </SectionTitle>
            <Text className="integration-text">
              One differences leaders, management-science so, best treat. Still
              problems upper and anger devoting out. With hiding their boss
              phase drops. A strenuous in ticket get write it by proposal.
            </Text>
            <VintageBox right={true} vintageTwo={true} position="relative">
              <Button className="integration-btn">Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </IntegrationItemWrwatcher>
  )
}

export default Integrations
