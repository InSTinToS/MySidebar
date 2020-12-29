import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface ListItemProps {
  bottom?: boolean
  pathname: string
  buttonId: string
}

const Style = styled(motion.nav)`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;

  height: 100vh;

  background-color: #d65881;

  .icon {
    width: 24px;
    height: 24px;
    margin: 24px;

    svg {
      width: 24px;
      height: 24px;

      fill: #fcfcfc;
      stroke: #fcfcfc;
    }
  }

  .label,
  #title {
    display: flex;
    align-items: center;

    width: 138px;
    height: 72px;

    white-space: nowrap;
    padding-right: 24px;
    color: #fcfcfc;
  }

  #title {
    font-size: 1.8rem;
  }

  #header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 72px;

    border-bottom: solid 2px #fcfcfc;
  }

  .Hamburger {
    margin: 24px;

    svg {
      height: 17px;
    }
  }

  ul {
    position: relative;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    li,
    button {
      display: flex;
      align-items: center;

      width: 100%;
      height: 72px;
    }
  }
`

export const ListItem = styled.li<ListItemProps>`
  ${({ bottom }) =>
    bottom &&
    css`
      position: absolute;
      bottom: 72px;
      left: 0;
    `}

  ${({ pathname, buttonId }) => {
    return (
      pathname.includes(buttonId) &&
      css`
        ${`#${buttonId}`} {
          background-color: #6e4850;
        }
      `
    )
  }}
`

export default Style

Style.displayName = 'Sidebar-Style'
