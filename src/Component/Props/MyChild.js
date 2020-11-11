import React, {Component} from 'react';

/** MyChild Component
 * 親->子 コンポーネントの情報伝達
 * Propsを用いる
 */
export default class PropsMyChild extends Component {
    // 2.プロパティ値を元に出力を生成
    render() {
        return (
            <div>こんにちは、{this.props.name}さん！</div>
        );
    }
}