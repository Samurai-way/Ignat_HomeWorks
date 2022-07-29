import React from 'react'
import m from './Message.module.css';

type messageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageType) {
    return (
        <div className={m.wrapper}>
            <img src={props.avatar} className={m.img}/>
            <div className={m.mini_wrapper}>
                <div className={m.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={m.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message
