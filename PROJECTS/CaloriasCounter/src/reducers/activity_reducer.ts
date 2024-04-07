import type { ActividadType } from "../types";

type ActivityActions =
  | {
      type: "ADD_ACTIVITY";
      payload: { newActivity: ActividadType };
    }
  | {
      type: "SET_ACTIVITY_ID";
      payload: { id: ActividadType["id"] };
    }
  | {
      type: "DELETE_ACTIVITY";
      payload: { id: ActividadType["id"] };
    }
  | {
      type: "RESTART";
    };
  

type ActivityState = {
  activities: ActividadType[];
  activeId: ActividadType["id"];
};

const localStorageActivities : string= localStorage.getItem("activities-8765762354") || "";

const initialState: ActivityState = {
  activities : localStorageActivities ? JSON.parse(localStorageActivities) : [],
  activeId: "",
};

const activityReducer = (state: ActivityState, action: ActivityActions) => {
  if (action.type === "ADD_ACTIVITY") {
    let updatedActivities: ActividadType[] = [];
    if (state.activeId) {
      updatedActivities = state.activities.map((activity) => {
        if (activity.id === state.activeId) {
          return action.payload.newActivity;
        }
        return activity;
      });
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }
    return {
      ...state,
      activities: updatedActivities,
      activeId: "",
    };
  }
  if (action.type === "SET_ACTIVITY_ID") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }
  if (action.type === "DELETE_ACTIVITY") {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.payload.id
      ),
    };
  }
  if (action.type === "RESTART") {
    return {
      activities: [],
      activeId: "",
    };
  }
};

export { activityReducer, initialState };

export type { ActivityActions, ActivityState };
