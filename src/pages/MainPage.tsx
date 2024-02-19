import {Component} from "react";
import {ISearchState, Search} from "../widgets/Search/Search.tsx";
import {CardContainer, ICardState} from "../widgets/CardContainer/CardContainer.tsx";
import {getRoot} from "../features/getRoot/getRoot.tsx";
import {getPeople} from "../features/getPeople/getPeople.tsx";

interface IMain extends ISearchState, ICardState{}

class MainPage extends Component<NonNullable<unknown>, IMain> {

    constructor(props: NonNullable<unknown>) {
        super(props);
        this.state = {
            keys: [],
            characters: []
        }
    }

    async componentDidUpdate(prevState) {
        const {characters, keys} = this.state;
        if (prevState.keys !== keys) {
            const keys = await getRoot();
            this.setState({keys});
        }
        if (prevState.keys !== characters) {
            const characters = await getPeople();
            this.setState({characters})
        }
        console.log('asfd')
    }


    render() {
        const {keys, characters} = this.state;
        return (
            <section className='bg'>
                <Search keys={keys}/>
                <CardContainer characters={characters}/>
            </section>
        );
    }
}

export default MainPage;