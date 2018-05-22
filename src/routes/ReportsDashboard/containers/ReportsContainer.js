import { connect } from 'react-redux'

import Reports from '../components/Reports'

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
  counter : state.counter
})



export default connect(mapStateToProps, mapDispatchToProps)(Reports)
