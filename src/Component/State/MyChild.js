import React, {Component} from 'react';

/** MyChild Component
 * 子->親 コンポーネントの情報伝達
 * Stateを用いる
 */
export default class MyChild extends Component {
    constructor(props) {
        super(props);

        //Stateを初期化
        this.state = {
            data: 'child data'
        };

        //3. 親コンポーネントのupdateメソッドを呼び出す
        // 親のupdateメソッドを使って子から更新をかける感じ？
        console.log(this.props);
        this.props.onUpdate(this.state);
    };

    render() {
        return (
            <p>MyChild: {this.state.data}</p>
        );
    }
}