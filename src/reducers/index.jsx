import { combineReducers } from 'redux';
import searchTerm from './reducer_search_term.jsx';

const rootReducer = combineReducers({
  searchTerm: searchTerm,
});

export default rootReducer;
