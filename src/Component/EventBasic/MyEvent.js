import React, {Component} from 'react';

export default class MyEvent extends Component {

    show(e) {
        console.log(`${this.props.greet}, ${e.target.value}!!!`)
    }

    render() {
        return (
            <form>
                <label htmlFor="txtName">名前：</label>
                {/* this.props.greetを正しく参照できなくなるため、bindする
                イベントハンドラー(onChange)にはthisを明示的にバインドする
                 */}
                <input id="txtName" type="text" onChange={this.show.bind(this)}></input>
            </form>
        )
    }
}