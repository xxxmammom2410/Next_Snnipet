import { useState } from "react";

const RadioExample = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);

  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  return (
    <>
      {RADIO_COLLECTION.map((radioFruit) => {
        return (
          <label key={radioFruit} htmlFor={radioFruit}>
            <input
              id={radioFruit}
              type="radio"
              value={radioFruit}
              checked={fruit === radioFruit}
              onChange={onChange}
            />
            {radioFruit}
          </label>
        );
      })}
      <h3>私は{fruit}が食べたい</h3>
    </>
  );
};

export default RadioExample;
