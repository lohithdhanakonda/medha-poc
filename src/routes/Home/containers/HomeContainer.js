import { connect } from 'react-redux'

import Home from '../components/Home'
import {FilesUploaded} from '../modules/home.js'

const mapDispatchToProps = {
FilesUploaded
}

const mapStateToProps = (state) => ({
  ...state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
