import { combineReducers, createStore} from "redux";
import countriesReducer from '../Redux/Reducer/CountriesReducer'


const rootReducer = combineReducers({
  countries : countriesReducer

});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
