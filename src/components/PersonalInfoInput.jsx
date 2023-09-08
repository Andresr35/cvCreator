import PropTypes from "prop-types";
import { useState } from "react";
import Trash from "./Trash";
import Add from "./Add";

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
      <h2>Personal Info:</h2>
      {personalInfo.map((currentPoint, index) => (
        <label key={index}>
          <input
            type="text"
            value={currentPoint}
            onChange={(e) => handlePointChange(e.target.value, index)}
          />
          <button onClick={() => handlePointDelete(index)}>
            Delete
            <Trash />
          </button>
        </label>
      ))}
      <label>
        Add New Point:
        <input
          type="text"
          value={point}
          onChange={(e) => setPoint(e.target.value)}
        />
      </label>

      <button onClick={handlePointAdd}>
        Add Point
        <Add />
      </button>
    </div>
  );
};
PersonalInfoInput.propTypes = {
  personalInfo: PropTypes.array.isRequired,
  setPersonalInfo: PropTypes.func.isRequired,
};
export default PersonalInfoInput;
