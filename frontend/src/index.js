import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'
import { SortFilters } from './actions'

const initialState = {
    sortFilter : SortFilters.DATE_DESCENDING
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    initialState,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <AppContainer />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker()
