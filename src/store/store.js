import { compose, legacy_createStore as createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { rootReducer } from "./root-reducer"


let middleWares

if(process.env.NODE_ENV === 'production'){
  middleWares = [thunk]
}
middleWares = [logger, thunk]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)