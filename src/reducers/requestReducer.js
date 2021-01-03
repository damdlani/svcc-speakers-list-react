import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  PUT_FAILURE,
  PUT_SUCCESS,
} from "../actions/requestActions";

export const REQUEST_STATUS = {
  loading: "loading",
  success: "success",
  error: "error",
};

export const initialState = {
  records: [],
  status: REQUEST_STATUS.loading,
  error: null,
};

export const requestReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        records: action.records,
        status: REQUEST_STATUS.success,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        status: REQUEST_STATUS.error,
        error: action.error,
      };
    case PUT_SUCCESS:
      const { records } = state;
      const { record } = action;
      const recordIndex = records.map(({ id }) => id).indexOf(record.id);
      return {
        ...state,
        records: [
          ...records.slice(0, recordIndex),
          record,
          ...records.slice(recordIndex + 1),
        ],
      };
      case PUT_FAILURE:
        console.log("Error occured")
        return {
          ...state,
          status: REQUEST_STATUS.error,
          error: action.error,
        };
    default:
      return state;
  }
};
