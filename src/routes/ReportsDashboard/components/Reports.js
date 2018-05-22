import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'

export default class Reports extends React.Component {
  render() {
    return (
      <div className='results-div'>
        <Tabs id='uncontrolled-tab-example'>
          <Tab eventKey={1} title='Summary'>
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title='Timeline Report'>
            Tab 2 content
          </Tab>
        </Tabs>
      </div>
    )
  }
}