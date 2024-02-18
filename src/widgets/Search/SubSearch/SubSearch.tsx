import {Component} from "react";

interface ISubSearch {
    el: string
}

// eslint-disable-next-line react/prefer-stateless-function
export class SubSearch extends Component<ISubSearch> {

    render () {
        const {el} = this.props;
        return (
            <li>{el}</li>
        )
    }
}