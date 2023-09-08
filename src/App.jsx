import "./App.css";
import BasicInfoInput from "./components/BasicInfoInput";
import { useState } from "react";
import EducationInfoInput from "./components/EducationInfoInput";
import ExperienceInfoInput from "./components/ExperienceInfoInput";
import PersonalInfoInput from "./components/PersonalInfoInput";
import Resume from "./Resume";
import jsPDF from "jspdf";
import Add from "./components/Add";

// So There shoud be a section on the left for things to add and the resume template on the right.
function App() {
  const [basicInfo, setBasicInfo] = useState({
    name: "John Appleseed",
    address: "1234 address ave, City , State, Zip Code",
    number: "(123)456-7890",
    email: "email@domain.com",
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
    setExperienceInfo(newExperienceInfo);
  };
  const saveResume = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
    });
    doc.html(document.getElementById("Resume"), {
      callback: (doc) => {
        doc.save("resume");
      },
      margin: [10, 10, 10, 10],
      width: 550,
      windowWidth: 675,
    });
  };

  return (
    <>
      <h1>Welcome to my resume builder!</h1>
      <fieldset>
        <h2>Basic Information:</h2>
        <BasicInfoInput basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
      </fieldset>
      {educationInfo.map((school, schoolIndex) => (
        <fieldset key={schoolIndex}>
          <h2>School #{schoolIndex + 1}:</h2>
          <EducationInfoInput
            schoolIndex={schoolIndex}
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
          />
        </fieldset>
      ))}
      <button onClick={handleNewSchool}>
        Add More Education <Add />{" "}
      </button>
      {experienceInfo.map((experience, experienceIndex) => (
        <fieldset key={experienceIndex}>
          <ExperienceInfoInput
            experienceIndex={experienceIndex}
            experienceInfo={experienceInfo}
            setExperienceInfo={setExperienceInfo}
          />
        </fieldset>
      ))}
      <button onClick={handleNewExperience}>
        Add More Experience <Add />{" "}
      </button>

      <fieldset>
        <PersonalInfoInput
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </fieldset>

      <Resume
        basicInfo={basicInfo}
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
      <button onClick={saveResume}>Save Resume</button>
    </>
  );
}

export default App;
/**
 *
 * TODO: Expand to IPAD width.
 * TODO: Expand to Laptop width.
 * TODO: Make look more legit. Add trash icons and plus icons?
 */
