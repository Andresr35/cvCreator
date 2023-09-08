import PropTypes from "prop-types";
import { useState } from "react";
import Trash from "./Trash";
import Add from "./Add";

const ExperienceInfoInput = ({
  experienceIndex,
  experienceInfo,
  setExperienceInfo,
}) => {
  const [point, setPoint] = useState("Add new Point");
  const handleExperienceInfoChange = (newValue, prop) => {
    const newExperienceInfo = [...experienceInfo];
    newExperienceInfo[experienceIndex][prop] = newValue;
    setExperienceInfo(newExperienceInfo);
  };
  const handlePointChange = (newPoint, index) => {
    const newExperienceInfo = [...experienceInfo];
    newExperienceInfo[experienceIndex].points[index] = newPoint;
    setExperienceInfo(newExperienceInfo);
  };
  const handlePointDelete = (index) => {
    const newExperienceInfo = [...experienceInfo];
    newExperienceInfo[experienceIndex].points.splice(index, 1);
    setExperienceInfo(newExperienceInfo);
  };
  const handleNewPoint = () => {
    const newExperienceInfo = [...experienceInfo];
    newExperienceInfo[experienceIndex].points.push(point);
    setPoint("Add New Point");
    setExperienceInfo(newExperienceInfo);
  };
  return (
    <div>
      <h2>Experience #{experienceIndex + 1}:</h2>
      <label>
        Job Name:
        <input
          type="text"
          value={experienceInfo[experienceIndex].job}
          onChange={(e) => handleExperienceInfoChange(e.target.value, "job")}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={experienceInfo[experienceIndex].description}
          onChange={(e) =>
            handleExperienceInfoChange(e.target.value, "description")
          }
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={experienceInfo[experienceIndex].title}
          onChange={(e) => handleExperienceInfoChange(e.target.value, "title")}
        />
      </label>
      <h4>Points:</h4>
      {experienceInfo[experienceIndex].points.map((point, index) => (
        <label key={index}>
          Point {index + 1}:
          <input
            type="text"
            value={point}
            onChange={(e) => {
              handlePointChange(e.target.value, index);
            }}
          />
          <button onClick={() => handlePointDelete(index)}>
            Delete <Trash />{" "}
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
      <button onClick={handleNewPoint}>
        Add Point <Add />
      </button>
    </div>
  );
};
ExperienceInfoInput.propTypes = {
  experienceIndex: PropTypes.number.isRequired,
  experienceInfo: PropTypes.array.isRequired,
  setExperienceInfo: PropTypes.func.isRequired,
};

export default ExperienceInfoInput;
