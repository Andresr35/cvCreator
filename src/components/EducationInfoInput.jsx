import PropTypes from "prop-types";
import { useState } from "react";
import Trash from "./Trash";
import Add from "./Add";

const EducationInfoInput = ({
  educationInfo,
  setEducationInfo,
  schoolIndex,
}) => {
  const [newPoint, setNewPoint] = useState("Add new Point");

  const handleEducationInfoChange = (newValue, property) => {
    const newEducationInfo = [...educationInfo];
    newEducationInfo[schoolIndex][property] = newValue;
    setEducationInfo(newEducationInfo);
  };

  const handlePointChange = (newPoint, index) => {
    const newEducationInfo = [...educationInfo];
    newEducationInfo[schoolIndex].points[index] = newPoint;
    setEducationInfo(newEducationInfo);
  };
  const handlePointDelete = (index) => {
    const newEducationInfo = [...educationInfo];
    newEducationInfo[schoolIndex].points.splice(index, 1);
    setEducationInfo(newEducationInfo);
  };
  const handleNewPoint = () => {
    const newEducationInfo = [...educationInfo];
    newEducationInfo[schoolIndex].points.push(newPoint);
    setNewPoint("Add New Point");
    setEducationInfo(newEducationInfo);
  };
  return (
    <div>
      <label>
        School attended:
        <input
          type="text"
          value={educationInfo[schoolIndex].school}
          onChange={(e) => {
            handleEducationInfoChange(e.target.value, "school");
          }}
        />
      </label>
      <label>
        Degree Achieved:
        <input
          type="text"
          value={educationInfo[schoolIndex].degree}
          onChange={(e) => {
            handleEducationInfoChange(e.target.value, "degree");
          }}
        />
      </label>
      <label>
        School Address:
        <input
          type="text"
          value={educationInfo[schoolIndex].address}
          onChange={(e) => handleEducationInfoChange(e.target.value, "address")}
        />
      </label>
      <label>
        Years Attending:
        <input
          type="text"
          value={educationInfo[schoolIndex].yearsAttending}
          onChange={(e) =>
            handleEducationInfoChange(e.target.value, "yearsAttending")
          }
        />
      </label>
      <div>
        <h4>Bullet Points:</h4>

        {educationInfo[schoolIndex] &&
          educationInfo[schoolIndex].points.map((point, index) => (
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
                Delete
                <Trash />
              </button>
            </label>
          ))}
        <label>
          Add New Point:
          <input
            type="text"
            value={newPoint}
            onChange={(e) => setNewPoint(e.target.value)}
          />
        </label>
        <button onClick={handleNewPoint}>
          Add <Add />{" "}
        </button>
      </div>
    </div>
  );
};
EducationInfoInput.propTypes = {
  educationInfo: PropTypes.array.isRequired,
  setEducationInfo: PropTypes.func.isRequired,
  schoolIndex: PropTypes.number.isRequired,
};

export default EducationInfoInput;
