"use client"

/**
 *
 * This component acts as a parent for client side components that require redux store
 * Wrap the component with this 'Redux Provider' to use state management on client side
 *
 * the updates made on the client side in the store will not be reflected in the server side components
 *
 * SERVER SIDE:
 * - Dispatching: store.dispatch(functionName(payload))
 * - Getting data from store: store.getState().sliaceName.stateName
 *
 * CLIENT SIDE:
 * - Dispatching: dispatch(functionName(payload)) [useDispatch()]
 * - Getting data from store: useSelector((state)=>state.slice.statename)
 *
 * Ref: https://www.youtube.com/watch?v=dRLjoT4r-jc
 */

import { Provider } from "react-redux"
import store from "./store"
import { ChildrenProps } from "@/utils/interfaces"

const ReduxProvider = ({ children }: ChildrenProps) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
