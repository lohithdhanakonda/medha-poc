import React from 'react'
import Dropzone from 'react-dropzone'
export default class Home extends React.Component {
    render() {
        return (
            <div className='home-div'>
                <div>Upload files</div>
                <Dropzone onDrop={this.props.FilesUploaded}>
                </Dropzone>
            </div>
        )
    }
}