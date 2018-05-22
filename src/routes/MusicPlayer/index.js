import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path:'player',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Player = require('./containers/PlayerContainer').default
      const reducer = require('./modules/player').default

      injectReducer(store, { key: 'player', reducer })

      cb(null, Player)

    }, 'player')
  }
})
