import { loadCategories } from "./categoryActions";
export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITY_ERROR";

export const FETCH_ACTIVITIES_START = "FETCH_ACTIVITIES_START";
export const FETCH_ACTIVITIES_SUCCESS = "FETCH_ACTIVITIES_SUCCESS";
export const FETCH_ACTIVITIES_ERROR = "FETCH_ACTIVITIES_ERROR";

export function addModels() {
  return function(dispatch) {
    loadActivities()(dispatch);
    loadCategories()(dispatch);
  };
}

export function loadActivities() {
  return function(dispatch) {
    dispatch({ type: FETCH_ACTIVITIES_START });
    fetch("/activities")
      .then(resp => resp.json())
      .then(activities => {
        dispatch({
          type: FETCH_ACTIVITIES_SUCCESS,
          activities
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ACTIVITIES_ERROR,
          error
        });
      });
  };
}

export function addActivity(activity) {
  return function(dispatch) {
    const body = JSON.stringify({ activity });
    const headers = {
      "Content-Type": "application/json"
    };
    fetch("/activities", { method: "POST", body, headers })
      .then(resp => resp.json())
      .then(activity => {
        dispatch(addActivitySuccess(activity));
      })
      .catch(error => {
        dispatch(addActivityError(error));
      });
  };
}

export function addActivitySuccess(activity) {
  return {
    type: ADD_ACTIVITY_SUCCESS,
    activity
  };
}

export function addActivityError(error) {
  return {
    type: ADD_ACTIVITY_ERROR,
    error
  };
}
export function fetchActivitiesPending() {
  return {
    type: FETCH_ACTIVITIES_START
  };
}

export function fetchActivitiesSuccess(activities) {
  return {
    type: FETCH_ACTIVITIES_SUCCESS,
    activities
  };
}