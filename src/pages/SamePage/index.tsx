/* eslint-disable react/display-name */
import React from 'react'

import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'

import { StoreState } from 'store'
import { ThemeState } from 'store/theme'

import Sidebar, { RouteProps } from 'components/Sidebar'

import { AiFillCar } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const samePageRoutes: RouteProps[] = [
  {
    label: 'Segunda',
    path: '/samePage',
    path2: '/samePage/secondPage',
    icon: () => <AiFillCar />,
    component: () => <SecondPage />,
  },
  {
    label: 'Terceira',
    path: '/samePage/thirdPage',
    icon: () => <AiFillCar />,
    component: () => <ThirdPage />,
  },
  {
    label: 'Quarta',
    path: '/samePage/fourthPage',
    icon: () => <AiFillCar />,
    component: () => <FourthPage />,
  },
  {
    label: 'Quinta',
    path: '/samePage/fifthPage',
    icon: () => <AiFillCar />,
    component: () => <FifthPage />,
  },
  {
    label: 'Other Page',
    path: '/otherPage',
    icon: () => <AiFillCar />,
    bottom: true,
  },
]

const SamePage: React.FC = () => {
  const { sidebar } = useSelector<StoreState, ThemeState>(store => store.theme)

  return (
    <Sidebar
      title='Same Page'
      routes={samePageRoutes}
      selected={sidebar.selected}
      letters={sidebar.letters}
      background={sidebar.background}
      samePage
    />
  )
}

export default SamePage
