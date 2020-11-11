import React, { useState, useEffect } from 'react';

/**
 * 副作用フック
 * - レンダー後に呼ばれる
 * - ライフサイクルの レンダー後→componentDidmount(コンポーネントの配置後), componentDidupdate(コンポーネントの再描画後)
 *   componentWillUnmount(コンポーネントの廃棄時) と同様の目的
 * 
 * - マウント直後、更新後なのかに関係なく、大抵の場合は同じ副作用をおこしたい
 */
function Example() {
  const [count, setCount] = useState(0);

  /**
   * propsやstateにアクセスすることが可能
   * 発火タイミング：初回レンダリングも含む、毎回のレンダー時に呼ばれる
   */
  useEffect(() => {
    // DOMを更新した後に　タイトルを設定
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;