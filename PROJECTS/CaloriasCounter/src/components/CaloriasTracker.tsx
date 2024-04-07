import { ActividadType } from "../types";

type CaloriasTrackerProps = {
  activities: ActividadType[];
};

const CaloriasTracker = ({ activities }: CaloriasTrackerProps) => {
  const caloriasNeg = activities
    .filter((activity) => activity.category === 1)
    .reduce((acc, curr) => acc + curr.calorias, 0);
  const caloriasPos = activities
    .filter((activity) => activity.category === 2)
    .reduce((acc, curr) => acc + curr.calorias, 0);
  const diff = caloriasPos - caloriasNeg;


  return (
    <>
      <div className="text-white text-2xl ">
        {" "}
        Calorias Ganadas:{" "}
        <p className="text-center text-4xl">{caloriasPos} CAL</p>{" "}
      </div>
      <div className="text-white text-2xl">
        {" "}
        Calorias Perdidas:{" "}
        <p className="text-center text-4xl">{caloriasNeg} CAL</p>{" "}
      </div>
      <div className="text-white text-2xl">
        {" "}
        Diferencial:{" "}
        <p className="text-center text-4xl">{diff} CAL</p>{" "}
      </div>
    </>
  );
};

export default CaloriasTracker;
