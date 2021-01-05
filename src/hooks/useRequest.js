import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";
import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  PUT_FAILURE,
  PUT_SUCCESS,
} from "../actions/requestActions";
import { requestReducer, REQUEST_STATUS } from "../reducers/requestReducer";

export const useRequest = (baseURL, route) => {
  const initialState = {
    records: [],
    status: REQUEST_STATUS.loading,
    error: null,
  };

  const [{ records, status, error }, dispatch] = useReducer(
    requestReducer,
    initialState
  );

  const signal = useRef(axios.CancelToken.source());

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${baseURL}/${route}`, {
          cancelToken: signal.current.token,
        });
        dispatch({
          type: FETCH_SUCCESS,
          records: response.data,
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Get request canceled");
        } else {
          dispatch({
            type: FETCH_FAILURE,
            status: REQUEST_STATUS.error,
            error: error.message,
          });
        }
      }
    })();

    return () => {
      console.log('Component terminated and axios request canceled');
      signal.current.cancel();
    }
  }, [baseURL, route]);

  const state = {
    records,
    status,
    error,
    put: React.useCallback(async (record) => {
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
    }, []),
  };

  return state;
};