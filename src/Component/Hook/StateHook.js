import React, { useState } from 'react';

/**
 * ステートフック = useState
 * クラスコンポーネントでしか、stateは使用できなかったため、関数コンポーネントでも使用できるようにする
 * ボタンをクリックするとカウンターの値が増えるコンポーネント
 */
function Example() {
  // useStateは、現在のstateの値(count)と、更新するための関数(setCount)をペアにして返す
  // useState(n) n = 初期値
  // details: https://ja.reactjs.org/docs/hooks-state.html

  // [a,b] = 分割代入 aとbの変数を作っている
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* イベントハンドラ(onClick)で、フックを呼び出している*/}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;