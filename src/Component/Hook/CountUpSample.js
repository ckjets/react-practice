/**
 * quote: https://tech.zeals.co.jp/entry/2019/08/09/140605
 */
import React, { useState, useEffect } from 'react';

/**
 * 基本的に、第二引数は 空配列を指定するらしい
 * 空の配列を渡すと、副作用がコンポーネント内のどの値にも依存していないということをReactに伝える
 * 副作用はマウント時に実行され、アンマウント時にクリーンアップされるが、更新時には実行されないようになる
 */
const Counter = () => {
    const [count, setCount] = useState(0);
    const [hoge, setHoge] = useState("hoge");
  
    /**
     * 初回レンダー時、
     */
    useEffect(() => {
      console.log("like componentDidMount or ComponentDidUpdate");
    }); //①第二引数省略 
  
    useEffect(() => {
      console.log("like componentDidMount"); // 初回レンダー時のみ
    }, []); //②第二引数に空配列
  
    useEffect(() => {
      console.log("カウントがインクリメントされた");
    }, [count]); // 初回レンダー時と「count」が変化した場合に実行される
  
    useEffect(() => {
        console.log("hogeが切り替わった"); // 初回レンダー時と、「hoge」が変化した場合に実行される
    }, [hoge]);
  
    // func
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
  
    return (
      <div>
        <p>{count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>

        <p>{hoge}</p>
        {/* クリックしたら、hogeとfugaが切り替わる */}
        <button onClick={() => setHoge(hoge == "hoge" ? "fuga" : "hoge")}>hoge button</button>
      </div>
    );
  };

  export default Counter;