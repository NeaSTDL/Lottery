import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import NavBar from './NavBar.jsx';
import Instructions from './Instructions.jsx';
import QrCode from './QrCode.jsx';
import Controls from './Controls.jsx';
import Participants from './Participants.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <Grid>
        {this.props.children}
      </Grid>
    );
  }
}