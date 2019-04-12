import React, { Component } from 'react';

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import "./App.css";

class App extends Component {
    state = {
        robots: [],
        searchfield: ""
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChangeHandler = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);

    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if (!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc" >
                    <h1 className="f1">Meet-Robot</h1>
                    <SearchBox searchChange={this.onSearchChangeHandler} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                    <Footer />
                </div>
            )
        }
    }
}

export default App;