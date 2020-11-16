import React, {Component} from 'react';

/**
 * クラスコンポーネント
 * - State管理
 * - ライフサイクルメソッドの定義ができる 
 */
export default class MyState extends Component {

    constructor(props) {
        super(props);

        // 1.Stateの初期値を設定
        this.state = {
            current: new Date()
        };

        // これはダメな例(値を変更する時はsetStateを用いる)
        // ただし、コンストラクタの中では代入可能(ここはコンストラクタなのでOK)
        this.state.current = new Date();

        // 3. 1000ミリ秒おきにState(current)を更新
        setInterval(()=>{
            this.setState({
                current: new Date()
            });
        }, 1000);
    }

    render() {
     return (
         // 2. currentの値をページに反映
         <div>現在時刻は、{this.state.current.toLocaleString()}です。</div>
     )   
    }
}