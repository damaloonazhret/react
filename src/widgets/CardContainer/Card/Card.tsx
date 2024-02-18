import {Component} from "react";
import {ICharacter} from "../CardContainer.tsx";

export class Card extends Component<ICharacter> {
    render () {
        {console.log(this.props)}
        const {name, birth_year} = this.props;
        return (
            <div>
                {name}
                {birth_year}
            </div>
        )
    }
}