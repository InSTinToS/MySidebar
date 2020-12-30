import React from 'react'
import Style from './styles'

import { ThemeActions } from 'store/theme'

import Content from 'components/Sidebar/Content'

import { useDispatch } from 'react-redux'

const FifthPage: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Content>
      <Style>
        <h1>FifthPage</h1>
        <button onClick={() => dispatch(ThemeActions.changeTheme())}>Change Theme</button>
      </Style>
    </Content>
  )
}

export default FifthPage
