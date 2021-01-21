import cats from "../apis/cats";
import {
  CREATE_CAT,
  FETCH_CAT,
  FETCH_CATS,
  DELETE_CAT,
  EDIT_CAT,
} from "./types";
import history from "../history";

export const createCat = (formValues) => async (dispatch) => {
  const response = await cats.post("/cats", formValues);

  dispatch({ type: CREATE_CAT, payload: response.data });
  history.push("/");
};

export const fetchCats = () => async (dispatch) => {
  const response = await cats.get("/cats");

  dispatch({ type: FETCH_CATS, payload: response.data });
};

export const fetchCat = (id) => async (dispatch) => {
  const response = await cats.get(`/cats/${id}`);

  dispatch({ type: FETCH_CAT, payload: response.data });
};

export const editCat = (id, formValues) => async (dispatch) => {
  const response = await cats.patch(`/cats/${id}`, formValues);

  dispatch({ type: EDIT_CAT, payload: response.data });
  history.push("/");
};

export const deleteCat = (id) => async (dispatch) => {
  await cats.delete(`/cats/${id}`);

  dispatch({ type: DELETE_CAT, payload: id });
  history.push("/");
};
