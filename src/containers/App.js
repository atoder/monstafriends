import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { setSearchField, requestMonsters } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFriends.searchField,
    friends: state.requestMonsters.friends,
    pending: state.requestMonsters.isPending,
    error: state.requestMonsters.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters()),
  };
};

class App extends Component {

  componentDidMount() {
    this.props.onRequestMonsters();
  }

  render() {
    const { searchField, onSearchChange, friends, isPending } = this.props;
    const filteredFriends = friends.filter((friend) => {
      return friend.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!friends.length) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">MonstaFriends</h1>
          <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
