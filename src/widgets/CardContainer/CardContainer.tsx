import {Component} from "react";
import style from './CardContainer.module.scss'
import {Card} from "./Card/Card.tsx";

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

export interface ICardState {
    characters: Array<ICharacter>;
}

export class CardContainer extends Component<ICardState, ICard> {

    render() {
        const {characters= []} = this.props;
        return (
            <aside className={style.cardBox} >
                {characters.map((el: ICharacter) => (
                    <Card key={el.url} {...el}/>
                ))}
            </aside>
        );
    }
}