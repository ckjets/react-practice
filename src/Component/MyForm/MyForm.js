import React, {Component} from 'react';

/**
 * MyForm Component
 */
export default class MyForm extends Component {
    constructor(props) {
        super(props);

        // 1.Stateを初期化
        this.state = {
            name: '山田太郎',
            email: 'hoge@example.com'
        };

        // thisを固定
        this.handleChange = this.handleChange.bind(this);
        this.show = this.show.bind(this);
    }

    // 3.入力ボックスの変更をStateに反映
    handleChange(e) {
        this.setState({
            // Computed property namesという構文
            // 要素名（e.target.name）をのそのままプロパティ 名として、要素値(e.target.value)を格納しなさい
            // name属性で指定している値がはいる
            [e.target.name]: e.target.value
        });
    }

    // 4.[送信]ボタンで入力値をログに出力
    show() {
        console.log(`name: ${this.state.name}`);
        console.log(`email: ${this.state.email}`);
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="name">名前：</label>
                    <input id="name" name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div>
                    <label htmlFor="email">メールアドレス：</label>
                    <input id="email" name="email" type="mail" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div>
                    <button type="button" onClick={this.show}>送信</button>
                </div>
            </form>
        )
    }
}