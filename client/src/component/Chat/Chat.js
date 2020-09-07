import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [sideDrawerOpen,setSideDrawerOpen]=useState(false)
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
          if(users){
          let userArr =  users.map((user)=>{
                return user.name
            })
            console.log(userArr)
      setUsers(userArr);}
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  const drawerToggleClickHandler =()=>{
       setSideDrawerOpen((sideDrawerOpen)=>!sideDrawerOpen)
  }
  const backdropClickHandle =()=>{
      setSideDrawerOpen(false)
  }

  let backdrop;
  if(sideDrawerOpen){
      backdrop=<Backdrop click={backdropClickHandle}/>
  }
  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} drawerClickHandler={drawerToggleClickHandler} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          <SideDrawer users={users} show={sideDrawerOpen}/>
          {backdrop}
      </div>
    </div>
  );
}

export default Chat;