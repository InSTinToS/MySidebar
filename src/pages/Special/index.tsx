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

const specialRoutes: RouteProps[] = [
  {
    label: 'Segunda',
    path: '/special',
    path2: '/special/secondPage',
    icon: () => <AiFillCar />,
  },
  {
    label: 'Terceira',
    path: '/special/thirdPage',
    icon: () => <AiFillCar />,
  },
  {
    label: 'Quarta',
    path: '/special/fourthPage',
    icon: () => <AiFillCar />,
  },
  {
    label: 'Quinta',
    path: '/special/fifthPage',
    icon: () => <AiFillCar />,
  },
  {
    label: 'Other Page',
    path: '/otherPage',
    icon: () => <AiFillCar />,
    bottom: true,
  },
]

const Special: React.FC = () => {
  const { sidebar } = useSelector<StoreState, ThemeState>(store => store.theme)

  return (
    <Sidebar
      routes={specialRoutes}
      title='Same Page'
      selected={sidebar.selected}
      letters={sidebar.letters}
      background={sidebar.background}
      special
    />
  )
}

export default Special
