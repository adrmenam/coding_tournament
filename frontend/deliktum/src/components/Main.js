import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Events from './Events';
import EventDetails from './EventDetails';
import AddEvent from './AddEvent';
import Map from './Map';



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Events} />
      <Route exact path='/events/add' component={AddEvent} />
      <Route exact path='/events/:id' component={EventDetails} />
      <Route exact path='/map' component={Map} />
    </Switch>
  </main>
)


export default Main;
