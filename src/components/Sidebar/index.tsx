import React, { useEffect } from 'react'
import Style, { ListItem } from './styles'

import { SidebarActions } from 'store/sidebar'
import { StoreState } from 'store'

import Hamburger from 'components/Hamburger'

import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

export interface RouteProps {
  icon?: () => JSX.Element
  component?: () => JSX.Element
  label: string
  path: string
  bottom?: boolean
  exact?: boolean
  path2?: string
}

interface SidebarProps {
  routes: RouteProps[]
  title?: string
  specialAnimation?: boolean
  selected: string
  letters: string
  background: string
}

const Sidebar: React.FC<SidebarProps> = ({
  routes,
  title = '',
  specialAnimation = false,
  selected,
  letters,
  background,
}) => {
  const open = useSelector<StoreState, boolean>(({ sidebar }) => sidebar.open)
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const height = window.innerHeight

  const onToggle = () => dispatch(SidebarActions.toggleSidebar(!open))

  const cycle = () => (open ? 'open' : 'closed')

  const motionBackground = {
    open: {
      width: 210,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },

    closed: {
      width: 72,
      transition: {
        type: 'tween',
        duration: 0.2,
      },
    },
  }

  const motionUl = {
    open: {
      transition: {
        type: 'tween',
        staggerChildren: 0.1,
      },
    },

    closed: {
      transition: {
        type: 'tween',
        staggerChildren: 0,
      },
    },
  }

  const motionTitle = {
    open: {
      opacity: [0, 1],
      x: [-24, 0],
      transition: {
        type: 'tween',
        duration: 0.4,
      },
    },

    closed: {
      opacity: [1, 0],
      x: [0, -16],
      transition: {
        type: 'tween',
        duration: 0.1,
      },
    },

    initial: {
      opacity: 0,
    },
  }

  const motionLiText = {
    open: {
      opacity: [0, 1],
      x: [-24, 0],
      transition: {
        type: 'tween',
        duration: 0.4,
      },
    },

    closed: {
      opacity: [1, 0],
      x: [0, -16],
      transition: {
        type: 'tween',
        duration: 0.1,
      },
    },

    initial: {
      opacity: 0,
    },
  }

  useEffect(() => {
    const searchArray = routes.map(route => (route.path === pathname ? 1 : 0))
    window.scrollTo(0, height * searchArray.indexOf(1))
  }, [])

  return (
    <Style variants={motionBackground} animate={cycle()} letters={letters} background={background}>
      <div id='header'>
        <Hamburger toggle={onToggle} state={open} color={letters} />

        <AnimatePresence>
          {open && (
            <motion.div variants={motionTitle} initial='initial' id='title'>
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.ul variants={motionUl} animate={cycle()}>
        {routes.map((route, index) => (
          <ListItem
            selected={selected}
            key={route.path}
            bottom={route.bottom}
            pathname={pathname.replaceAll('/', '-')}
            buttonId={route.path.replaceAll('/', '-')}
            buttonId2={route.path2 !== undefined ? route.path2.replaceAll('/', '-') : 'none'}
          >
            <button
              type='button'
              id={route.path.replaceAll('/', '-')}
              onClick={() => {
                window.scrollTo(0, height * index)
                history.push(route.path)
              }}
            >
              {route.icon !== undefined && (
                <div className='icon'>
                  <route.icon />
                </div>
              )}

              <AnimatePresence>
                {open && (
                  <motion.div variants={motionLiText} initial='initial' className='label'>
                    {route.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </ListItem>
        ))}
      </motion.ul>
    </Style>
  )
}

export default Sidebar
