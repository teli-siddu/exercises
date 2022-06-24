import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

// const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(()=>{console.log(store.getState())})
export default store;