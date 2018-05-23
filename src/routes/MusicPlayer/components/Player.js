import React from 'react'
import 'font-awesome/scss/font-awesome.scss'
export default class Player extends React.Component {
  componentDidMount() {
    this.props.availableAllSongsList()
  }
  render() {
    return (
      <div className='player-div'>
        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <label>Available songs</label>
            {this.props.availableSongs ? <div>{this.props.availableSongs.map(aso => (
              <div>{aso.name} <i className='fa fa-plus'></i></div>
            )) }</div> : null}
          </div>
          <div className='col-lg-6 col-md-6'>Playlist</div>
        </div>
      </div>
    )
  }
}