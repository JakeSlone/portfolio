import React from "react"
import { Wrapper } from "./Projects.styles"
import caret from "../../images/right-arrow.png"
import caretb from "../../images/right-arrowb.png"

const Projects = ({ dark }) => {
  return (
    <Wrapper>
      <div className="container">
        <h3 data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
          Projects
        </h3>
        <div className="projects-container">
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Nait Redesign</h3>
            <hr />
            <p>
              Managed the redesign of the website for Nait.ca. Rebuilt legacy
              codebase using Nuxtjs(vue) and graphql. Used Kontent.ai CMS with
              webhooks to update the content.
            </p>
            <a href="https://nait.ca" target="_blank" rel="noreferrer">
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>ChessAmp</h3>
            <hr />
            <p>
              Designed and built a Chess website using Nextjs serverless,
              Tailwind and MongoDB. The site using is Sanity CMS for content.
            </p>
            <a href="https://chessamp.com" target="_blank" rel="noreferrer">
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Nissan/Infiniti Owners Portal</h3>
            <hr />
            <p>
              Worked with a small team on the redesign of the portal. The
              project is only accessible if you own a Nissan/Infiniti vehicle
              but there is multiple screenshots and more info at the link below.
              This project was made inside of AEM using JS, jquery, SCSS, and
              JSP.
            </p>
            <a
              href="https://github.com/JakeSlone/OwnersPortal"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Nissan Titan Campaign</h3>
            <hr />
            <p>
              Worked with a small team on a targeted campaign website. The
              project consisted of 5 different webpages with each containing
              different images and copy targeted to the users location. This
              project was made using React, Storybook, Lerna and Styled
              Components.
            </p>
            <a
              href="https://www.nissanusa.com/titan-tech-for-doing-it-yourself/"
              target="_blank"
              rel="noreferrer"
            >
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
            <a
              href="https://github.com/JakeSlone/TitanCampaign"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>TypeChess Discord Bot</h3>
            <hr />
            <p>
              A chess bot that is controlled through a discord channel. You can
              either play against someone else in the channel, or play against
              an AI. This project was made in NodeJS.
            </p>
            <a
              href="https://github.com/JakeSlone/TypeChessBot"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>TypeChess Twitch Bot</h3>
            <hr />
            <p>
              A chess bot that is controlled through twitch chat. Any valid
              moved typed in the streams twitch chat will be played on the
              stream. This project was made in NodeJS.
            </p>
            <a
              href="https://www.twitch.tv/typechess"
              target="_blank"
              rel="noreferrer"
            >
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
            <a
              href="https://github.com/JakeSlone/TypeChessTwitch"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>What Car Should I Buy</h3>
            <hr />
            <p>
              Worked with a small team on a Nissan sponsored website educating
              people on purchasing a car. This project was made using React,
              Storybook and Styled Components.
            </p>
            <a
              href="https://whatcarshouldibuy.com/"
              target="_blank"
              rel="noreferrer"
            >
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Nissan Electric Vehicles</h3>
            <hr />
            <p>
              Worked with a small team on an informational page about Nissans
              current EV lineup. This project was made in React with Styled
              Components.
            </p>
            <a
              href="https://www.nissanusa.com/vehicles/electric-cars.html"
              target="_blank"
              rel="noreferrer"
            >
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects
