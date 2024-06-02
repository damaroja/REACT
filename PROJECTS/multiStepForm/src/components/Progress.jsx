const Progress = ({ percentage }) => {
  return (
    <div className="progress">
      <div
        className={`progress-bar w-${percentage} bg-success`}
        role="progressbar"
        aria-valuenow={`${percentage}`}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default Progress;
