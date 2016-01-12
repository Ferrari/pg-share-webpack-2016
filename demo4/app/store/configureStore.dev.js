import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import DevTools from '../containers/DevTools'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes.js'
import api from '../middlewares/api'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, api),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
