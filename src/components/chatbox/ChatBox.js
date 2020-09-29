import React, { Component } from 'react';
import trash from '../../assets/icons/trashcan.svg'
import send from '../../assets/icons/sendicon.svg'
import './chatbox.css'

class ChatBox extends Component {
  render() {
    return (
      <div className='tainer'>
          <div className='search-container'>
            <input type="text" placeholder="Search" />
          </div>
          <div className='conversation-list'>
            <div className='conversation active'>
                <img src={send} alt="user" />
                <div className="title-text">
                   Sam Wager
                </div>
                <div className='created-date'>
                    Apr 16
                </div>
                <div className='conversation-message'>
                    This is a message written by
                </div>
            </div>
          </div>
          <div className='new-message-container'>
            {/* <a href="#" style={{paddingLeft: 5}}> +</a> */}
          </div>
          <div className='chat-title'>
            <span>Sam Wager</span>
            <img src={trash} alt="Delete Conversation" />
          </div>
          <div className='chat-message-list'>
            <div className='chat-message-list'>
                <div className='message-row you-message'>
                    <div className='message-content'>
                    <div className='message-text'>YEAH!!</div>
                    <div className='message-time'>Apr 16</div>
                    </div>
                </div>
                <div className='message-row other-message'>
                    <div className='message-content'>
                    <img src={send} alt="profile" />
                    <div className='message-text'>This is going to be a long text. And needs to properly design it, you know cause we need to design it</div>
                    <div className='message-time'>Apr 16</div>
                    </div>
                </div>
            </div>
          </div>
          <div className='chat-form'>
            <input type="text" placeholder="type a message" />
            <img src={send} alt="send message" />
          </div>
      </div>
    );
  }
}

export default ChatBox;
