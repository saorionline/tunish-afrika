import React from "react"
import { FaQuoteLeft } from "react-icons/fa"
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"

import { Container, Row, Col } from "reusecore/Layout"
import SectionTitle from "reusecore/SectionTitle"
import { SlickSlider, SliderItem } from "reusecore/SlickSlider"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"

import data from "assets/data/testimonial"
import TestimonialWrapper from "./testimonial.style"

const Testimonial = () => {
  const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="slick-arrow slick-prev-icon">
      <IoIosArrowRoundBack />
    </button>
  )
  const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="slick-arrow slick-next-icon">
      <IoIosArrowRoundForward />
    </button>
  )
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <Image src={data.thumbs[i]} alt="Image" />
        </a>
      )
    },
    autoplay: true,
    infinite: true,
    dots: true,
    dotsClass: "slick-dots testimonial__thumb",
    speed: 1500,
    slidesShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  }

  return (
    <TestimonialWrapper id="testimonial">
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle leftAlign={true} className="testmonial__heading">
              <Heading as="h4">Testimonial</Heading>
              <Heading as="h2">
                <Text as="span">What our client says </Text> about us
              </Heading>
            </SectionTitle>
            <SlickSlider {...settings} className="testimonial__slider">
              {data.testimonials.map((testimonial, index) => (
                <SliderItem key={index}>
                  <Text>
                    <FaQuoteLeft />
                    {testimonial.quote}
                  </Text>
                  <Box className="slider__meta">
                    <Image src={testimonial.thumb} alt="iproland testimonial" />
                    <Box className="testimonial-client">
                      <Heading as="h6">{testimonial.author}</Heading>
                      <Text>{testimonial.dsignation}</Text>
                    </Box>
                  </Box>
                </SliderItem>
              ))}
            </SlickSlider>
          </Col>
        </Row>
      </Container>
    </TestimonialWrapper>
  )
}

export default Testimonial
