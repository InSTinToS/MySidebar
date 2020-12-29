/* eslint-disable react/display-name */
import React from 'react'

import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'

import Sidebar, { RouteProps } from 'components/Sidebar'

import { AiFillCar } from 'react-icons/ai'

const otherPageRoutes: RouteProps[] = [
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

const OtherPage: React.FC = () => {
  return (
    <>
      <Sidebar
        routes={otherPageRoutes}
        title='Other Page'
        selected='#6e4850'
        letters='#fcfcfc'
        background='#d65881'
      />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </>
  )
}

export default OtherPage
