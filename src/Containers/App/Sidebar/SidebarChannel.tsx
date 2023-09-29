// import React from 'react'
import { useDispatch } from "react-redux";
import "./SidebarChannel.css"
import { setChannelInfo } from "../../../redux/appSlice";

interface Channel {
  id: string;
  channelName: any; // Replace 'any' with the actual type of your channel data
}

function SidebarChannel( props: Channel) {
  const dispatch = useDispatch();
  
  return (
    <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
      channelId: props.id, 
      channelName: props.channelName
    }))}>
      <h4><span className="sidebarChannel_hash">#</span>{props.channelName}</h4>
    </div>
  );
}

export default SidebarChannel