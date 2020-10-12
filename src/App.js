import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


const state = {
    robots: robots,
    searchfield: ''
}
class App extends React.Component {
    render() {
        return(
            <div className='tc'>
                <h1>RoboBuddies</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
    
        );
    }

}


export default App;