import React from 'react'
import "./Message.css";
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

function Message(props: { data: { [key: string]: any } }) {
  const { data } = props;
  const { "data-timestamp": timestamp, "data-message": message, "data-user": user } = data;
  return (
    <div className='message'>
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message