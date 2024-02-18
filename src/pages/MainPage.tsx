import {Component} from "react";
import {ISearchState, Search} from "../widgets/Search/Search.tsx";
import {CardContainer, ICharacter} from "../widgets/CardContainer/CardContainer.tsx";
import {ICardState} from "../widgets/CardContainer/Card/Card.tsx";

interface IMain extends ISearchState, ICardState{};

class MainPage extends Component<NonNullable<unknown>, IMain> {

    constructor(props: NonNullable<unknown>) {
        super(props);
        this.state = {
            keys: [],
            items: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/')
            .then(r => r.json())
            .then(data => {
                const keys = Object.keys(data);
                this.setState({keys})
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
            });
        fetch('https://swapi.dev/api/people/?page=1')
            .then(r => r.json())
            .then(data => {
                const characters = data.results;
                this.setState({ items: characters });
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
            });
    }

    render() {
        const {keys, items} = this.state;
        return (
            <section className='bg'>
                <Search keys={keys}/>
                <CardContainer items={items}/>
            </section>
        );
    }
}

export default MainPage;