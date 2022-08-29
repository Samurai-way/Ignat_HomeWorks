import React from 'react'
import Message from './Message';
import p from '../h5-rrd-v6/pages/Pages.module.css'
const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKS6aQQJwk14e-0MPJv4Qz5LRFVkK1tjI1A&usqp=CAU',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div className={p.hw1}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
