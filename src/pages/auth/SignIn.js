import React, { Component } from 'react';
import background from '../../assets/images/loginbg.jpg'
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Login as login } from "../../store/actions/Auth";

class SignIn extends Component {
     
    state={
        email: '',
        password: '',
        userType: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleType(event) {
        console.log('option select',event.target);
        this.setState({value: event.target.value});
      }
    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.history.push('/dashboard');
        let { email, password, userType } = this.state
        let body = {
          email: email,
          password: password,
          userType: userType
        }
        this.props.login(body);
        console.log(this.state);

    }
  render() {
    if (this.props.isAuthenticated) {
     // let nextUrl = new URLSearchParams(this.props.location.search).get("next");
      let nextUrl = '/dashboard'
      this.props.history.replace(`${nextUrl}`);
    }
    return (
      <div  style={styles}> 
     <form onSubmit={this.handleSubmit} className="white" style={{width: '40%', position: 'absolute', left: '30%', top: '16%'}}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <br />
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field col s12">
    <select id="userType" style={{display: 'block'}} onChange={this.handleChange}>
      <option value="" disabled selected>Choose your role</option>
      <option value="1">Exhibitor</option>
      <option value="2">Buyer</option>
      <option value="3">Visitor</option>
    </select>
  </div>
{/*         
        <label>
          Choose your Role:
          <select value={this.state.value} onChange={this.handleType}>
            <option value="1">Exhibitor</option>
            <option value="2">Buyer</option>
            <option value="3">Visitor</option>
            <option value="4">Buying Agent</option>
          </select>
        </label> */}
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" >Login</button>
        </div>
     </form>
     </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));

const styles = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    alignContent: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    width: '100%',
    backgroundSize: 'cover'
  }

  