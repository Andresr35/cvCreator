import PropTypes from "prop-types";

const Resume = ({ basicInfo, personalInfo, educationInfo, experienceInfo }) => {
  return (
    <div>
      Resume:
      <div id="Resume">
        <h2>{basicInfo.name}</h2>
        <h4>
          {basicInfo.address} | {basicInfo.number} | {basicInfo.email}
        </h4>
        <h3>Education</h3>
        <hr />
        {educationInfo.map((education, index) => (
          <div key={index}>
            <h3>{education.school}</h3>
            <p>{education.address}</p>
            <p>{education.degree}</p>
            <p>{education.yearsAttending}</p>
            <ul>
              {education.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
        <h3>Experience</h3>
        <hr />
        {experienceInfo.map((experience, index) => (
          <div key={index}>
            <h3>{experience.job}</h3>
            <p>{experience.location}</p>
            <p>{experience.description}</p>
            <p>
              <b>{experience.title}</b>
            </p>
            <p>{experience.yearsEmployed}</p>
            <ul>
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
        <h3>Personal Info</h3>
        <hr />
        <ul>
          {personalInfo.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Resume.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  personalInfo: PropTypes.array.isRequired,
  educationInfo: PropTypes.array.isRequired,
  experienceInfo: PropTypes.array.isRequired,
};
export default Resume;
