import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const enhancer = compose(
	applyMiddleware(...middlewares),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(combineReducers({ ...reducers }), enhancer)
sagaMiddleware.run(rootSaga)

export default store
