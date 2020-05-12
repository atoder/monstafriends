import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED,
} from "./constants.js";

const initialStateSearch = {
  searchField: "",
};

export const searchFriends = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // deconstruct with
      // can also do { ...state, {searchField: action.payload} };
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateMonsters = {
  isPending: false,
  friends: [],
  error: ''
}
export const requestMonsters = (state = initialStateMonsters, action = {}) => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_MONSTERS_SUCCESS:
      return Object.assign({}, state, { monsters: action.payload, isPending: false, });
    case REQUEST_MONSTERS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false, });
    default:
      return state;
  }
};
