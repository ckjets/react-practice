import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Type extends Component {
    render() {
        return(
        <div>{this.props.name}</div>
        );
    }
}

// 型情報を宣言
Type.propTypes = {
    // nameはstringで、必須です
    name: PropTypes.string.isRequired
}