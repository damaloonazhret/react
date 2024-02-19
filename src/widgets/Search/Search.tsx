import {Component} from "react";
import style from './Search.module.scss'
import {SubSearch} from "./SubSearch/SubSearch.tsx";

export interface ISearchState {
    keys: string[];
}

export class Search extends Component<ISearchState> {

    render() {
        const { keys = [] } = this.props;
        return (
            <nav className={style.search}>
                <input className={style.input} type="text" placeholder='Search...'/>
                <button className={style.btn} type='button'>Search!</button>
                <ul className={style.list}>
                    {keys.map((el: string) => (
                        <SubSearch key={el} el={el} />
                    ))}
                </ul>
            </nav>
        )
    }
}