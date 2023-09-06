import PropTypes from "prop-types";
import { useState } from "react";

const PersonalInfoInput = ({ personalInfo, setPersonalInfo }) => {
  const [point, setPoint] = useState("Add new point");
  const handlePointChange = (newPoint, index) => {
    const newPersonalInfo = [...personalInfo];
    newPersonalInfo[index] = newPoint;
    setPersonalInfo(newPersonalInfo);
  };
  const handlePointDelete = (index) => {
    const newPersonalInfo = [...personalInfo];
    newPersonalInfo.splice(index);
    setPersonalInfo(newPersonalInfo);
  };
  const handlePointAdd = () => {
    const newPersonalInfo = [...personalInfo];
    newPersonalInfo.push(point);
    setPersonalInfo(newPersonalInfo);
  };
  return (
    <div>
      Personal Info:
      {personalInfo.map((currentPoint, index) => (
        <label key={index}>
          <input
            type="text"
            value={currentPoint}
            onChange={(e) => handlePointChange(e.target.value, index)}
          />
          <button onClick={() => handlePointDelete(index)}>Delete</button>
        </label>
      ))}
      <input
        type="text"
        value={point}
        onChange={(e) => setPoint(e.target.value)}
      />
      <button onClick={handlePointAdd}>Add Point</button>
    </div>
  );
};
PersonalInfoInput.propTypes = {
  personalInfo: PropTypes.array.isRequired,
  setPersonalInfo: PropTypes.func.isRequired,
};
export default PersonalInfoInput;
