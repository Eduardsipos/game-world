import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import'./App.css';
import { robots } from '../robots';

class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }

    }
  
    componentDidMount() {
      this.setState({ robots: robots})
    }
  
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value });
    }
  
    render() {
       const {robots, searchfield} = this.state
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !robots.length ?
      <h1>Loading</h1>:
       (
        <div className="tc">
          <h1 className="custom mb-5">GameWorld</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
             <CardList robots={filteredRobots} />
             <br/>
          </Scroll>
        </div>
      )
     }
    }
  

  export default App;


