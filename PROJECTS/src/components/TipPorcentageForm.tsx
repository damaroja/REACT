const tipOptions = [
  {
    id: "tip-0",
    value: 0.0,
    label: "0%",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPorcentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

const TipPorcentageForm = ({ setTip }: TipPorcentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-xl">
        <form>
          {tipOptions.map((option) => (
            <label key={option.id} className="flex items-center">
              <input
                type="radio"
                name="tip"
                value={option.value}
                onChange={(e) => setTip(+e.target.value)}
              />
              <span className="ml-2">{option.label}</span>
            </label>
          ))}
        </form>
      </h3>
    </div>
  );
};

export default TipPorcentageForm;
