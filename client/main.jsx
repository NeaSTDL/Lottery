import React from 'react';
import { render } from 'react-dom';

import { Meteor } from 'meteor/meteor';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import App from '../imports/ui/App.jsx';
import Home	from '../imports/modules/Home.jsx';
import Index from '../imports/modules/Index.jsx';
import Lottery from '../imports/modules/Lottery.jsx';
import Register from '../imports/modules/Register.jsx';

import '../imports/startup/accounts-config.js';
 
Meteor.startup(() => {
  render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
		    <IndexRoute component={Home}/>
		    <Route path="lottery" component={Lottery}/>
		    <Route path="register" component={Register}/>
		  </Route>
		</Router>), 
  	document.getElementById('App')
  );
});