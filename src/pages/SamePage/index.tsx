/* eslint-disable react/display-name */
import React from 'react'

import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'

import Sidebar, { RouteProps } from 'components/Sidebar'

import { AiFillCar } from 'react-icons/ai'

const samePageRoutes: RouteProps[] = [
  {
    label: 'Segunda',
    path: '/samePage/secondPage',
    icon: () => <AiFillCar />,
  },
  {
    label: 'Terceira',
    path: '/samePage/thirdPage',
    icon: () => <AiFillCar />,
  },
  {
    label: 'Quarta',
    path: '/samePage/fourthPage',
    icon: () => <AiFillCar />,
  },
  {
    label: 'Quinta',
    path: '/samePage/fifthPage',
    icon: () => <AiFillCar />,
  },
]

const SamePage: React.FC = () => {
  return (
    <>
      <Sidebar routes={samePageRoutes} title='Same Page' samePage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </>
  )
}

export default SamePage