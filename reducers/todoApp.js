import { ActionsTypes } from "../actions/actionTypes";
import {
  addToDo,
  changeCheckBoxState,
  clearAllDone,
  markAsNotDone,
  markAsDone,
  getReturnedToDoData
} from "../actions/ActionHandlers";

const initialState = {
  todo: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.GET_TO_DO_DATA_SUCCESS:
      return getReturnedToDoData(state, action);
    case ActionsTypes.GET_TO_DO_DATA_FAIL:
      return getReturnedToDoData(state, action);
    case ActionsTypes.CLEAR_ALL_DONE:
      return clearAllDone(state, action);
    case ActionsTypes.CHANGE_CHECKBOX_STATE:
      return changeCheckBoxState(state, action);
    case ActionsTypes.HANDLE_ADD_DATA:
      return addToDo(state, action);
    case ActionsTypes.HANDLE_MARK_AS_NOT_DONE:
      return markAsNotDone(state, action);
    case ActionsTypes.HANDLE_MARK_AS_DONE:
      return markAsDone(state, action);
    default:
      return state;
  }
}

export default rootReducer;
