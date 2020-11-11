import { Component } from "react";
import MyEvent from "./MyEvent";

export default class EventParent extends Component {

    render() {
        return (
            <MyEvent greet="Hello"></MyEvent>
        ); 
    }

}