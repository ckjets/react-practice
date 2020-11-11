import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyState from './Component/State/MyState';
import MyParent from './Component/State/MyParent';
import PropsMyParent from './Component/Props/MyParent';
import Type from './Component/Type/Type';
import LoopParent from './Component/LoopBasic/LoopParent';
import EventParent from './Component/EventBasic/EventParent';
import MyForm from './Component/MyForm/MyForm';
import StateHook from './Component/Hook/StateHook';
import EffectsHook from './Component/Hook/EffectsHook';
import FriendEffectsHook from './Component/Hook/FriendEffectsHook';
{/** エントリポイント 
  index.jsでAppコンポーネントを呼び出す
  コンポーネントクラスのrenderメソッドが呼び出されて、出力が生成される
  出力は index.htmlの<div id="root">に反映される
*/}


/**
 * JSXは React.createElementメソッドに変換される
 */
ReactDOM.render(
  <React.StrictMode>
    <LoopParent></LoopParent>
    <EventParent></EventParent>
    <MyForm></MyForm>
    <StateHook/>
    
    {/* <App /> */}
    {/* <PropsMyParent></PropsMyParent> */}
    {/* <Type name="なまえ"></Type> */}


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




