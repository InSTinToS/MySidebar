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
    path: '/otherPage',
    path2: '/otherPage/firstPage',
    icon: () => <AiFillCar />,
    component: () => <FirstPage />,
    exact: true,
  },
  {
    label: 'Segunda',
    path: '/otherPage/secondPage',
    icon: () => <AiFillCar />,
    component: () => <SecondPage />,
  },
  {
    label: 'Terceira',
    path: '/otherPage/thirdPage',
    icon: () => <AiFillCar />,
    component: () => <ThirdPage />,
  },
  {
    label: 'Quarta',
    path: '/otherPage/fourthPage',
    icon: () => <AiFillCar />,
    component: () => <FourthPage />,
  },
  {
    label: 'Quinta',
    path: '/otherPage/fifthPage',
    icon: () => <AiFillCar />,
    component: () => <FifthPage />,
  },
  {
    label: 'Same Page',
    path: '/samePage',
    icon: () => <AiFillCar />,
    component: () => <SamePage />,
    bottom: true,
  },
]

const OtherPage: React.FC = () => {
  const { sidebar } = useSelector<StoreState, ThemeState>(store => store.theme)

  return (
    <>
      <Sidebar
        routes={otherPageRoutes}
        title='Other Page'
        selected={sidebar.selected}
        letters={sidebar.letters}
        background={sidebar.background}
      />
    </>
  )
}

export default OtherPage
