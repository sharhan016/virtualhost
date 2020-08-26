import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard';
import StallDisplay from './components/stalldisplay/StallDisplay'
import StoreList from './components/storelist/StoreList'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <div className="App">
       {/* <Navbar /> */}
        <Switch>
        <Route path='/' exact component={SignIn}></Route>
          <Route path='/dashboard' exact component={Dashboard}></Route>
          <Route path='/login' component={SignIn}></Route>
          <Route path='/register' component={SignUp}></Route>
          <Route path='/stalldisplay' component={StallDisplay}></Route>
          <Route path='/storelist' component={StoreList}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
/*

background: url(/img/loginbg.jpg) no-repeat;

*/