import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { friends: [], searchField: "" };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ friends: users }));
  }

  render() {
    const { friends, searchField } = this.state;
    const filteredFriends = friends.filter((friend) => {
      return friend.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!friends.length) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">MonstaFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList friends={filteredFriends} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
