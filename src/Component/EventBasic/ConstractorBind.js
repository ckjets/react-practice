import React, {Component} from 'react';

export default class MyEvent extends Component {

    show(e) {
        console.log(`${this.props.greet}, ${e.target.value}!!!`)
    }

    // コンストラクタでbindする
    constructor(props) {
        super(props)
        this.show = this.show.bind(this);
    }

    render() {
        return (
            <form>
                <label htmlFor="txtName">名前：</label>
                <input id="txtName" type="text" onChange={this.show}></input>
            </form>
        )
    }
}