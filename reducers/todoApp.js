import { ActionsTypes } from "../actions/actionTypes";
import { combineReducers } from "redux";

const initialStateHome = {
  todo: [
    {
      id: 1,
      title: "Description",
      description: "Second Description",
      completed: false
    },
    {
      id: 2,
      title: "Description",
      description: "Second Description",
      completed: false
    },
    {
      id: 3,
      title: "Description",
      description: "Second Description",
      completed: false
    },
    {
      id: 4,
      title: "Description",
      description: "Second Description",
      completed: true
    },
    {
      id: 5,
      title: "Description",
      description: "Second Description",
      completed: false
    }
  ]
};

function homeReducer(state = initialStateHome, action) {
  switch (action.type) {
    case ActionsTypes.CLEAR_ALL_DONE:
      return {
        todo: state.todo.map(t => {
          t.completed = false;
          return t;
        })
      };

    case ActionsTypes.CHANGE_CHECKBOX_STATE:
      return {
        todo: state.todo.map((item, index) => {
          if (index === action.payload.index) {
            item.completed = !item.completed;
          }
          return item;
        })
      };
    case ActionsTypes.HANDLE_ADD_DATA:
    case ActionsTypes.ADD_TODO:
    case ActionsTypes.ADD_TODO:
    default:
      return state;
  }
}

export default homeReducer;
