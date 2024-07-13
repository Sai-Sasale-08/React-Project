import axios from "axios";
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../actionType";

export const getdatafromserver = (paramobj) => (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST, payload: true });
    axios
      .get("http://localhost:8080/products",paramobj)
      .then((res) => {
        dispatch({ type: GET_DATA_REQUEST, payload: false });
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_DATA_REQUEST, payload: false });
        dispatch({ type: GET_DATA_FAILURE, payload: true });
      });
  };