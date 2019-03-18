import { ActionsTypes } from "../actions/actionTypes";
import { combineReducers } from "redux";

const initialStateHome = {
  data: [
    {
      "first-description": "Description",
      "second-description": "Second Description",
      status: false
    },
    {
      "first-description": "Description",
      "second-description": "Second Description",
      status: false
    },
    {
      "first-description": "Description",
      "second-description": "Second Description",
      status: false
    },
    {
      "first-description": "Description",
      "second-description": "Second Description",
      status: true
    },
    {
      "first-description": "Description",
      "second-description": "Second Description",
      status: false
    }
  ]
};

function homeReducer(state = initialStateHome, action) {
  switch (action.type) {
    case ActionsTypes.CLEAR_ALL_DONE:
      return Object.assign({}, state, {
        data: state.data.map((item, index) => {
          return Object.assign({}, item, {
            status: false
          });
        })
      });
    case ActionsTypes.CHANGE_CHECKBOX_STATE:
      return Object.assign({}, state, {
        data: state.data.map((item, index) => {
          if (index === action.payload.index) {
            return Object.assign({}, item, {
              status: !item.status
            });
          }
          return item;
        })
      });
    case ActionsTypes.HANDLE_ADD_DATA:
    case ActionsTypes.ADD_TODO:
    case ActionsTypes.ADD_TODO:
    default:
      return state;
  }
}

export default homeReducer;
