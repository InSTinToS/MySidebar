import React, { useEffect } from 'react'
import { ListItem, SidebarNav } from './styles'

import { SidebarActions } from 'store/sidebar'
import { StoreState } from 'store'

import Hamburger from 'components/Hamburger'

import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory, useLocation } from 'react-router-dom'

export interface RouteProps {
  icon?: () => JSX.Element
  component?: () => JSX.Element
  label: string
  path: string
  bottom?: boolean
  exact?: boolean
  path2?: string
  windowHeight?: number
}

interface SidebarProps {
  routes: RouteProps[]
  title?: string
  selected: string
  letters: string
  background: string
  samePage?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
  routes,
  title = '',
  samePage = false,
  selected,
  letters,
  background,
}) => {
  const open = useSelector<StoreState, boolean>(({ sidebar }) => sidebar.open)
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()

  const onToggle = () => dispatch(SidebarActions.toggleSidebar(!open))

  const moveCorrectly = (index: number) => {
    if (index !== 0) {
      const beforeWindowHeight = routes[index - 1].windowHeight
      beforeWindowHeight !== undefined
        ? window.scrollTo(0, beforeWindowHeight * window.innerHeight * index)
        : window.scrollTo(0, 1 * window.innerHeight * index)
    } else window.scrollTo(0, 0)
  }

  const motionContent = {
    open: {
      x: '210px',
      width: !samePage ? 'calc(100vw - 210px)' : 'calc(100vw - 210px - 15px)',
      transition: {
        type: 'tween',
        duration: 0.31,
      },
    },
    closed: {
      x: '72px',
      width: !samePage ? 'calc(100vw - 72px)' : 'calc(100vw - 72px - 15px)',
      transition: {
        type: 'tween',
        duration: 0.19,
      },
    },
  }

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
    const pathArray = routes.map(({ path }) => (path === pathname ? 1 : 0))
    const selectedIndex = pathArray.indexOf(1)
    moveCorrectly(selectedIndex)
  }, [])

  return (
    <>
      <SidebarNav
        variants={motionBackground}
        animate={open ? 'open' : 'closed'}
        initial={open ? 'open' : 'closed'}
        letters={letters}
        background={background}
      >
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

        <motion.ul variants={motionUl} animate={open ? 'open' : 'closed'}>
          {routes.map((route, index) => (
            <ListItem
              selected={selected}
              key={route.path}
              bottom={route.bottom}
              pathname={pathname.replaceAll('/', '-')}
              buttonId={route.path.replaceAll('/', '-')}
              buttonId2={route.path2 ? route.path2.replaceAll('/', '-') : 'none'}
            >
              <button
                type='button'
                id={route.path.replaceAll('/', '-')}
                onClick={() => {
                  moveCorrectly(index)
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
      </SidebarNav>

      {routes.map(route => (
        <motion.section
          key={route.path}
          variants={motionContent}
          animate={open ? 'open' : 'closed'}
          initial={open ? 'open' : 'closed'}
          style={{ overflow: 'hidden' }}
        >
          {samePage ? (
            route.component && route.component()
          ) : (
            <>
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />

              {route.path2 && (
                <Route
                  key={route.path2}
                  path={route.path2}
                  exact={route.exact}
                  component={route.component}
                />
              )}
            </>
          )}
        </motion.section>
      ))}
    </>
  )
}

export default Sidebar
