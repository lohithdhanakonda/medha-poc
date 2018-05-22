import { connect } from 'react-redux'

import Player from '../components/Player'

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
  ...state.player
})



export default connect(mapStateToProps, mapDispatchToProps)(Player)
