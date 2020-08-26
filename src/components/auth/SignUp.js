import React, { Component } from 'react';
import background from '../../assets/images/loginbg.jpg'

class SignOut extends Component {
    state={
        firstname: '',
        lastname: '',
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
        console.log(this.state);
    }
  render() {
    return (
      <div style={styles}>
     <form onSubmit={this.handleSubmit} className="white" style={{width: '60%', position: 'absolute', left: '20%'}}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <br />
        <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" >Sign Up</button>
        </div>
     </form>
     </div>
    );
  }
}

export default SignOut;

const styles = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    width: '100vw',
  }
