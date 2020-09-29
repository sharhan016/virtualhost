import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/dashboard/Dashboard';
import StallDisplay from './pages/stalldisplay/StallDisplay'
import { connect } from "react-redux";
// import Loading from "./components/Loaders/GlobalLoading";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: false
    };
  };
  
  render() {
    function SecuredRoute(props) {
      console.log('this is props',props);
      return(
        <Route path={props.path} render={ data =>  props.auth.isAuthenticated ?
          (<props.component {...data}></props.component>):
          (<Redirect to={{pathname: '/'}}></Redirect> )}></Route>
      )
    }
    return(
      <BrowserRouter basename="/event_portal">
      <div className="App">
       {/* <Navbar /> */}
        <Switch>
        <Route path='/' exact component={SignIn}></Route>
          <SecuredRoute path='/dashboard' exact component={Dashboard} auth={this.props.auth}></SecuredRoute>
          <Route path='/login' component={SignIn}></Route>
          <Route path='/register' component={SignUp}></Route>
          <Route path='/stalldisplay' component={StallDisplay}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

const mapDispactchToProps = (dispatch) => ({
 // loadUser: () => dispatch(GetUser()),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispactchToProps)(App);
/*

background: url(/img/loginbg.jpg) no-repeat;

*/