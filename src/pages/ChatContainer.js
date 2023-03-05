import React, { useState } from "react";
import './CSS/ChatContainer.css'
import { People } from "../Data";
import MatchList from "./MatchList";
import ChatList from "./ChatList";

const ChatContainer = () => {
    const [selectedTab, setSelectedTab] = useState('Matches')

    return <div className="chat-container">
        <button
            className={selectedTab === 'Matches' ? 'selected-button tab-button' : 'tab-button'}
            onClick={() => setSelectedTab('Matches')}
        >Matches</button>
        <button
            className={selectedTab === 'Chat' ? 'selected-button tab-button' : 'tab-button'}
            onClick={() => setSelectedTab('Chat')}
        >Chat</button>

        {
            selectedTab === 'Matches' ? <MatchList
                data={People}
            /> : <ChatList/>
        }
    </div>
}

export default ChatContainer