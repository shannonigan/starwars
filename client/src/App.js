import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from './Home';



const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/departments/:id" component={DepartmentView} /> */}
    </Switch>
  </>
)

export default App;

