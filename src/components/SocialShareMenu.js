import React from "react"

import blogStyles from "./SocialShareMenu.module.scss"

import { IconContext } from "react-icons"
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai"

const SocialShareMenu = props => {
  return (
    <div className={blogStyles.menuContainer}>
      <ul className={blogStyles.menuList}>
        <li>
          <a
            href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fguillermoarriadevoe.com%2Fblog%2F${props.shareableLink}`}
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <AiFillTwitterSquare />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fguillermoarriadevoe.com%2Fblog%2F${props.shareableLink}`}
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <AiFillLinkedin />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fguillermoarriadevoe.com%2Fblog%2F${props.shareableLink}`}
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <AiFillFacebook />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialShareMenu
