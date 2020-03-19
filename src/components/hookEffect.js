import React, { useState, useEffect } from 'react'
function HookEffect(){
  const [friend, setFriend] = useState([
    {
      name:'jiaojiao',
      id: 1,
      status: true
    },
    {
      name:'ningning',
      id: 2,
      status: false
    }
  ])
  
  return(
    <div>
      {
        friend.map((list) => 
            <div key={ list.id }>
              <h1>用户名：{list.name}</h1>
              <h2>Id：{list.id}</h2>
              <h3>status：{list.status}</h3>
              <button onClick={ FriendStatus }>{ list.status === true ? '订阅我' : '取消订阅'}</button>
            </div>
        )
      }
    </div>
  )
}
function FriendStatus(props) {
  console.log(props)
  /* const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline'; */
}
export default HookEffect