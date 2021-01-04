import axios from "axios";
import React, { useEffect, useReducer } from "react";
import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  PUT_FAILURE,
  PUT_SUCCESS,
} from "../../actions/requestActions";
import {
  initialState,
  requestReducer,
  REQUEST_STATUS,
} from "../../reducers/requestReducer";

export const withRequest = (baseURL, route) => (Component) => (props) => {
  const [{ records, status, error }, dispatch] = useReducer(
    requestReducer,
    initialState
  );
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/speakers");
        dispatch({
          type: FETCH_SUCCESS,
          records: response.data,
        });
      } catch (error) {
        dispatch({
          type: FETCH_FAILURE,
          status: REQUEST_STATUS.error,
          error: error.message,
        });
      }
    })();
  }, []);

  const propsLocal = {
    records: records,
    status: status,
    error: error,
    put: (async (record) => {
      try {
        await axios.put(`${baseURL}/${route}/${record.id}`, record);
        dispatch({
          type: PUT_SUCCESS,
          record: record,
        });
      } catch (error) {
        dispatch({
          type: PUT_FAILURE,
          status: REQUEST_STATUS.error,
          error: error.message,
        });
      }
    }),
  };
  return <Component {...props} {...propsLocal}></Component>;
};
