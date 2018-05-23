import CoreLayout from '../layouts/CoreLayout'
import MusicPlayer from './MusicPlayer'
import Home from './Home'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home(store),
  childRoutes: [
      MusicPlayer(store)
    ]
})

export default createRoutes
