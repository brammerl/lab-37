import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AppProvider from '../../provider/AppProvider'
import MainContainer from '../../container/MainContainer';

export default function App() {
  return(<>
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path='/' component={MainContainer}/>
        </Switch>
      </AppProvider>
    </Router>
  </>
  )
}
  