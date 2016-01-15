import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes.js'
import api from '../middleware/api'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, api),
  reduxReactRouter({ routes, createHistory })
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
