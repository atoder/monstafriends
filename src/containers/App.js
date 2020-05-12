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
    monsters: state.requestMonsters.monsters,
    pending: state.requestMonsters.isPending,
    error: state.requestMonsters.error,
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
    const { searchField, onSearchChange, monsters, isPending } = this.props;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">MonstaFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList friends={filteredMonsters} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
