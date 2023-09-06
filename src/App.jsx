import "./App.css";
import BasicInfoInput from "./BasicInfoInput";
import { useState } from "react";
import EducationInfoInput from "./EducationInfoInput";
import ExperienceInfoInput from "./ExperienceInfoInput";
import PersonalInfoInput from "./PersonalInfoInput";

// So There shoud be a section on the left for things to add and the resume template on the right.
function App() {
  const [basicInfo, setBasicInfo] = useState({
    name: "John Appleseed",
    address: "1234 address ave, City , State, Zip Code",
    number: "(123)456-7890",
  });

  const [personalInfo, setPersonalInfo] = useState(["Went to Sequioa"]);
  const [educationInfo, setEducationInfo] = useState([
    {
      school: "Cal Poly Pomona",
      degree: "B.S. Computer Engineering",
      points: ["Took some courses", "Had some fun"],
      address: "Pomona, CA",
      yearsAttending: "2020-2024",
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      job: "McDonalds",
      description: "Company Description",
      title: "myTitle",
      points: ["cooked", "cleaned"],
      yearsEmployed: "2020-2024",
      location: "Pomona,CA",
    },
  ]);

  const handleNewSchool = () => {
    const newEducationInfo = [...educationInfo];
    newEducationInfo.push({
      school: "Cal Poly Pomona",
      degree: "B.S. Computer Engineering",
      points: ["Took some courses", "Had some fun"],
      address: "Pomona, CA",
      yearsAttending: "2020-2024",
    });
    setEducationInfo(newEducationInfo);
  };

  const handleNewExperience = () => {
    const newExperienceInfo = [...experienceInfo];
    newExperienceInfo.push({
      job: "McDonalds",
      description: "Company Description",
      title: "myTitle",
      points: ["cooked", "cleaned"],
      yearsEmployed: "2020-2024",
      location: "Pomona,CA",
    });
    setEducationInfo(newExperienceInfo);
  };

  return (
    <>
      <BasicInfoInput basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
      {educationInfo.map((school, schoolIndex) => (
        <EducationInfoInput
          key={schoolIndex}
          schoolIndex={schoolIndex}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
      ))}
      <button onClick={handleNewSchool}>Add More Education</button>
      {experienceInfo.map((experience, experienceIndex) => (
        <ExperienceInfoInput
          key={experienceIndex}
          experienceIndex={experienceIndex}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
      ))}
      <button onClick={handleNewExperience}>Add More Experience</button>
      <PersonalInfoInput
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    </>
  );
}

export default App;
