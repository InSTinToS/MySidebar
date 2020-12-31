import React from 'react'
import Style from './styles'

import { ThemeActions } from 'store/theme'

import { useDispatch } from 'react-redux'

const FifthPage: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Style>
      <h1>FifthPage</h1>
      <button
        onClick={() => dispatch(ThemeActions.changeTheme())}
        style={{ padding: 20, backgroundColor: '#fcfcfc' }}
      >
        Change Theme
      </button>
    </Style>
  )
}

export default FifthPage
