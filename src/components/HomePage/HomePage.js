import React, { Component } from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import {Row, Col} from 'antd';


// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./HomePage.css'); // eslint-disable-line global-require
}

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Row type='flex'>
          <Col span={6}>
            <LeftPanel></LeftPanel>
          </Col>
          <Col span={18}>
            <RightPanel></RightPanel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
