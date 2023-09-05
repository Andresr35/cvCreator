import PropTypes from "prop-types";
const EducationInfoInput = ({ educationInfo, setEducationInfo }) => {
  return (
    <>
      <input type="text" />
    </>
  );
};
EducationInfoInput.propTypes = {
  educationInfo: PropTypes.object.isRequired,
  setEducationInfo: PropTypes.func.isRequired,
};

export default EducationInfoInput;
