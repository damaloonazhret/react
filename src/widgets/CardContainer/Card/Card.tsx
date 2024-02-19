import {Component} from "react";
import {ICharacter} from "../CardContainer.tsx";


export class Card extends Component<ICharacter> {
    render () {
        const {name, height } = this.props;
        return (
            <div>
                {name}
                {height}
            </div>
        )
    }
}