import * as type from "../actions/actionTypes";
import  initialState from "./initialState";

function actionTypeEndsInSuccess(actionType) {
  return actionType.substring(actionType.length - 8) === "_SUCCESS";
}
export default function apiCallStatusReducer(
  state = initialState.apiCallInProgress,
  action
) {
  if (action.type == type.BEGIN_API_CALL) {
    return state + 1;
  } else if (action.type==type.API_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
