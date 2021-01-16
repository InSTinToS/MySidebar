/* eslint-disable react/display-name */
import React from 'react'

import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'

import SamePage from 'pages/SamePage'

import { StoreState } from 'store'
import { ThemeState } from 'store/theme'

import Sidebar, { RouteProps } from 'components/Sidebar'

import { AiFillCar } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const otherPageRoutes: RouteProps[] = [
  {
    label: 'Primeira',
    paths: ['/otherPage', '/otherPage/firstPage'],
    icon: () => <AiFillCar />,
    component: () => <FirstPage />,
    exact: true,
  },
  {
    label: 'Segunda',
    paths: ['/otherPage/secondPage'],
    icon: () => <AiFillCar />,
    component: () => <SecondPage />,
  },
  {
    label: 'Terceira',
    paths: ['/otherPage/thirdPage'],
    icon: () => <AiFillCar />,
    component: () => <ThirdPage />,
  },
  {
    label: 'Quarta',
    paths: ['/otherPage/fourthPage'],
    icon: () => <AiFillCar />,
    component: () => <FourthPage />,
    isBigInOther: true,
  },
  {
    label: 'Quinta',
    paths: ['/otherPage/fifthPage'],
    icon: () => <AiFillCar />,
    component: () => <FifthPage />,
  },
  {
    label: 'Same Page',
    paths: ['/samePage'],
    icon: () => <AiFillCar />,
    component: () => <SamePage />,
    bottom: true,
  },
]

const OtherPage: React.FC = () => {
  const { sidebar } = useSelector<StoreState, ThemeState>(store => store.theme)

  return (
    <Sidebar
      title='Other Page'
      routes={otherPageRoutes}
      selected={sidebar.selected}
      letters={sidebar.letters}
      background={sidebar.background}
    />
  )
}

export default OtherPage
