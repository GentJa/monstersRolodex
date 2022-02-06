import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';

class App extends Component {
  constructor() {
    super();

    this.state =  {
      monster: [],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({monster: user}))
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }

  render() {
    const {monster, searchField } = this.state;
    const filteredMonsters = monster.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <h1>{this.state.name}</h1> */}
        {/* <button onClick={() => this.setState({name:'Hello Gent'})}>Change Text</button> */}
        {/* <input type="search" 
         placeholder='search'
         onChange={e => this.setState({searchField:e.target.value})}/> */}

         <SearchBox 
          placeholder='search monsters by name'
          handleChange={this.handleChange}
         />
        <CardList monster = {filteredMonsters}></CardList>
      </div>
    );
  }

  
}

export default App;
