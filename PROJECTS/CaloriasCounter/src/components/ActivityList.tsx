import { ActividadType } from "../types";
import categories from "../data/categories";

import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activity_reducer";

type ActivityListProps = {
  activities: ActividadType[];
  dispatch: React.Dispatch<ActivityActions>;
};

const ActivityList = ({ activities, dispatch }: ActivityListProps) => {
  const isEmptyActivities = () => {
    return activities.length === 0;
  };

  const categoryNames = (id: number) => {
    return categories.find((category) => category.id === id)?.name;
  };

  const classCategory = (id: number) => {
    if(id === 1){
      return "bg-yellow-500 text-white p-2 rounded-lg"
    } else {
      return "bg-green-500 text-white p-2 rounded-lg"
    }
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-gray-800">Actividades</h2>
      {isEmptyActivities() ? (
        <p className="text-gray-600">No hay actividades registradas</p>
      ) : (
        <ul className="space-y-3">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="bg-white shadow p-5 rounded-lg flex justify-between"
            >
              <p className={classCategory(activity.category)}>
                {categoryNames(activity.category)}
              </p>
              <p className="font-semibold text-gray-800">
                {" "}
                {activity.actividad}
              </p>
              <p className="font-semibold text-gray-800">
                {" "}
                {activity.calorias} CAL
              </p>
              <div>
              <button
                onClick={() =>
                  dispatch({
                    type: "SET_ACTIVITY_ID",
                    payload: { id: activity.id },
                  })
                }
              >
                <PencilSquareIcon className="text-yellow-500 h-8 w-8" />
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_ACTIVITY",
                    payload: { id: activity.id },
                  })
                }
                className="ml-2"
              >
                <XCircleIcon className="text-red-500 h-8 w-8" />
              </button></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityList;
