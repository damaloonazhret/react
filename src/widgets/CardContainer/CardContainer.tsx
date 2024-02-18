import {Component} from "react";
import style from './CardContainer.module.scss'
import {Card, ICardState} from "./Card/Card.tsx";

// eslint-disable-next-line react/prefer-stateless-function

export interface ICharacter {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

interface ICard {
    card: Partial<ICharacter>
}


export class CardContainer extends Component<ICardState, ICard> {

    render() {
        const {items} = this.props;
        return (
            <aside className={style.cardBox} >
                {items.map((el) => (
                    <Card key={el.url} {...el}/>
                ))}
            </aside>
        );
    }
}