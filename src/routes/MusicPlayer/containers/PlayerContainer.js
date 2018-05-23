import { connect } from 'react-redux'

import Player from '../components/Player'
import {availableAllSongsList} from '../modules/player'

const mapDispatchToProps = {
availableAllSongsList
}

const mapStateToProps = (state) => ({
  ...state.player
})



export default connect(mapStateToProps, mapDispatchToProps)(Player)
