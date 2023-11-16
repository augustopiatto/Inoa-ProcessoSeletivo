interface MoneyInputInterface {
  name: string;
  value: number;
  setValue: (value: number) => void;
}

function MoneyInput({ name, value, setValue }: MoneyInputInterface) {
  function handleChange(event) {
    setValue(event?.target.value);
  }

  return (
    <label htmlFor={name} className="flex flex-col gap-2 max-w-[500px] my-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <input
        className="p-2 border border-white rounded-md focus:outline-0 focus:border-2 focus:border-slate-400"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default MoneyInput;
