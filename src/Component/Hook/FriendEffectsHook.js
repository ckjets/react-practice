// import React, { useState, useEffect } from 'react';

// /**
//  * 副作用フック
//  * API使用例なので、動かない
//  */
// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);

//   function handleStatusChange(status) {

//     // ステートフック
//     setIsOnline(status.isOnline);
//   }

// 　/**
//  * フレンドのオンラインステータスを購読し、
//  * クリーンアップとして、購読の解除
//  * 
//  * この例では、コンポーネントがアンマウントされる時や再レンダーによって副作用が再実行される時に ChatAPI の購読解除を行っています。
//  */
//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }

// export default FriendStatus;