import { combineReducers } from 'redux';
import ItemReducer from './reducer_item'
import ActiveItem from './reducer_active_item';
const rootReducer = combineReducers({
  items: ItemReducer,
  ActiveItem: ActiveItem
});

export default rootReducer;
