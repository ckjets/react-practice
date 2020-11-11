import React, {Component} from 'react';
import PropsMyChild from './MyChild';

export default class PropsMyParent extends Component {

    render() {
        return (
            // 子は「this.props.name」で受け取る
            <PropsMyChild name="ほげほげ"/>

        );
    }
}