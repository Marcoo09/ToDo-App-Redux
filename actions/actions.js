import { ActionsTypes } from "./actionTypes";

const clearAllDone = () => ({
  type: ActionsTypes.CLEAR_ALL_DONE
});

const changeCheckBoxState = index => ({
  payload: { index: index },
  type: ActionsTypes.CHANGE_CHECKBOX_STATE
});

export const Actions = {
  clearAllDone,
  changeCheckBoxState
};
