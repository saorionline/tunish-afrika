import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import { Container } from "reusecore/Layout"
import Box from "reusecore/Box"
import Image from "reusecore/Image"

import logo from "assets/images/common/logo.png"
import Data from "./utility/data.js"
import ScrollspyMenu from "./utility/ScrollspyMenu"
import NavigationWrap from "./navigation.style"

const Navigation = () => {
  const [expand, setExpand] = useState(false) 

  useEffect(() => {
    const header = document.getElementById("navbar")

    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavigationWrap id="navbar" className={`nav-block`}>
      <Container>
        <Box className="navbar-wrap">
          <Link to="/" className="logo">
            <Image src={logo} alt="prime app landing" />
          </Link>
          <nav className="nav">
            <FaBars
              className="mobile-menu-icon"
              onClick={() => setExpand(!expand)}
            />
            <ScrollspyMenu
              className={`collapsed ${expand ? "is-expanded" : ""}`}
              menuItems={Data.menuItems}
            />
          </nav>
        </Box>
      </Container>
    </NavigationWrap>
  )
}

export default Navigation
