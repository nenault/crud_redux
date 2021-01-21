/* eslint-disable import/no-anonymous-default-export */
import _ from "lodash";
import {
  CREATE_CAT,
  FETCH_CAT,
  FETCH_CATS,
  DELETE_CAT,
  EDIT_CAT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_CAT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CAT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CAT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CAT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
