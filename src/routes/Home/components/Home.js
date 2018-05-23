import React from 'react'
import {Button} from 'react-bootstrap'
import Dropzone from 'react-dropzone'
export default class Home extends React.Component {
    render() {
        return (
            <div className='home-div'>
                <div>Upload files</div>
                <Dropzone onDrop={this.props.FilesUploaded}>
                </Dropzone>
                <Button disabled={!this.props.songfiles||!this.props.songfiles.length} onClick={()=>this.props.router.push('/player')}>Move to player</Button>
            </div>
        )
    }
}