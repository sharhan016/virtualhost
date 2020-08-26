import React, { Component } from 'react';
import background from '../../assets/images/loginbg.jpg'



class SignIn extends Component {
    
    state={
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/dashboard');
        console.log(this.state);
    }
  render() {
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
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" >Login</button>
        </div>
     </form>
     </div>
    );
  }
}

export default SignIn;

const styles = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    alignContent: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    width: '100%',
    backgroundSize: 'cover'
  }
