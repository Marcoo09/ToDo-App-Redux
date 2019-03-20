import { ActionsTypes } from "./actionTypes";
import { getData } from "../networking/controllers/homeController";

const clearAllDone = () => ({
  type: ActionsTypes.CLEAR_ALL_DONE
});

const changeCheckBoxState = index => ({
  payload: { index: index },
  type: ActionsTypes.CHANGE_CHECKBOX_STATE
});

const addToDo = (title, description) => ({
  payload: {
    title: title,
    description: description
  },
  type: ActionsTypes.HANDLE_ADD_DATA
});

const markAsNotDone = index => ({
  payload: {
    index: index
  },
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE
});

const markAsDone = index => ({
  payload: {
    index: index
  },
  type: ActionsTypes.HANDLE_MARK_AS_DONE
});

export const getToDoData = () => {
  return async dispatch => {
    try {
      let response = await getData();
      dispatch(getToDoSuccess(response.data));
    } catch (error) {
      dispatch(getToDoFail(error.message));
    }
  };
};

const getToDoSuccess = res => ({
  payload: {
    todo: res
  },
  type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
});

const getToDoFail = () => ({
  payload: {},
  type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
});

export const Actions = {
  clearAllDone,
  changeCheckBoxState,
  addToDo,
  markAsNotDone,
  markAsDone,
  getToDoData
};
