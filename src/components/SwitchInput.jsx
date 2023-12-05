import { useEffect, useState } from "react";
import "../styles/SwitchInput.css";

const SwitchInput = ({ setSearchSwitch, searchSwitch }) => {
  const [isChecked, setIsChecked] = useState(searchSwitch);

  const handleInputChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    setSearchSwitch(newValue);
  };

  useEffect(() => {
    setIsChecked(searchSwitch);
  }, [searchSwitch]);

  return (
    <div className="absolute mt-[450px] max-lg:mt-[280px] max-sm:mt-[220px]">
      <input
        type="checkbox"
        name="check-toggle"
        id="checkbox"
        hidden
        checked={isChecked}
        onChange={handleInputChange}
      />
      <label htmlFor="checkbox" className="toggle">
        ID
        <div className="toggle__switch">
          <div className="toggle__circle"></div>
        </div>
        NAME
      </label>
    </div>
  );
};

export default SwitchInput;
