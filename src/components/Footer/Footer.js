import React from "react"
import { Wrapper } from "./Footer.styles"
import arrow from "../../images/arrow.png"
import arrowb from "../../images/arrowb.png"

const Footer = ({ dark }) => {
  function scrollToTop() {
    setTimeout(function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="tag">25 - JS &copy;</div>
        <a href="https://github.com/JakeSlone/portfolio" className="source">
          Source Code
        </a>
        <div
          className="to-top"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          Back to top <img src={dark ? arrow : arrowb} alt="arrow icon"></img>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
