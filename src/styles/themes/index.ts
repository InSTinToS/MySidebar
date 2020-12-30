import light from './light'
import dark from './dark'

export { light, dark }

export interface ThemeAttributes {
  name: string

  sidebar: {
    selected: string
    letters: string
    background: string
  }
}
