import React from 'react';
import './CSS/MatchList.css'
import Button from '../component/Common/Button';

const ChatList = ({ data }) => {
    return <div className="ChatList-container">
        <div className='wrapper'>
            <input
                type='text'
            />
            <Button
                label='Send'
            />
 
        </div>
    </div>
}

export default ChatList