import React, { useCallback, useEffect } from 'react'
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
  isBigInOther?: boolean
  bottom?: boolean
  exact?: boolean
  path2?: string
}

interface SidebarProps {
  routes: RouteProps[]
  selected: string
  letters: string
  background: string
  title?: string
  samePage?: boolean
  closedWidth?: number
  width?: number
}

const Sidebar: React.FC<SidebarProps> = ({
  routes,
  title = '',
  samePage = false,
  selected,
  letters,
  background,
  closedWidth = 72,
  width = 210,
}) => {
  const open = useSelector<StoreState, boolean>(({ sidebar }) => sidebar.open)
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()

  const onToggle = () => dispatch(SidebarActions.toggleSidebar(!open))

  const getAllIndexes = (arr: boolean[], val: boolean): number[] => {
    const newArray = []
    let i = -1

    while ((i = arr.indexOf(val, i + 1)) !== -1) {
      newArray.push(i)
    }

    return newArray
  }

  const moveCorrectly = useCallback(
    (index: number): void => {
      const heightOfRoutes = routes.map(
        route => document.getElementById(route.path.replaceAll('/', '--'))?.offsetHeight
      )

      const move =
        heightOfRoutes !== undefined &&
        heightOfRoutes.reduce((prev, curr, i) => {
          if (i < index && prev !== undefined && curr !== undefined) return prev + curr
          return prev
        }, 0)

      window.scrollTo(0, move as number)
    },
    [routes]
  )

  const contentSize = (): string => {
    const isBig = routes.map(route => route.isBigInOther === true)
    const indexesOfBigs = getAllIndexes(isBig, true)
    const pathOfBigs = []

    for (let i = 0; i < indexesOfBigs.length; i++) {
      pathOfBigs.push(routes[indexesOfBigs[i]].path)
    }

    if (samePage || pathOfBigs.find(el => el === pathname))
      return open ? `calc(100vw - ${width + 15}px)` : `calc(100vw - ${closedWidth + 15}px)`
    return open ? `calc(100vw - ${width}px)` : `calc(100vw - ${closedWidth}px)`
  }

  useEffect(() => {
    const pathArray = routes.map(({ path }) => (path === pathname ? 1 : 0))
    const selectedIndex = pathArray.indexOf(1)
    moveCorrectly(selectedIndex)
  }, [moveCorrectly, pathname, routes])

  const motionContent = {
    open: {
      x: width,
      width: contentSize(),
      transition: {
        type: 'tween',
        duration: 0.31,
      },
    },
    closed: {
      x: closedWidth,
      width: contentSize(),
      transition: {
        type: 'tween',
        duration: 0.19,
      },
    },
  }

  const motionBackground = {
    open: {
      width: width,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },

    closed: {
      width: closedWidth,
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
                  samePage && moveCorrectly(index)
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
          id={route.path.replaceAll('/', '--')}
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
