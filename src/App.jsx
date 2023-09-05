import "./App.css";
import BasicInfoInput from "./BasicInfoInput";
import { useState } from "react";
import EducationInfoInput from "./EducationInfoInput";

// So There shoud be a section on the left for things to add and the resume template on the right.
function App() {
  const [basicInfo, setBasicInfo] = useState({
    name: "John Appleseed",
    address: "1234 address ave, City , State, Zip Code",
    number: "(123)456-7890",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "Cal Poly Pomona",
    degree: "B.S. Computer Engineering",
    points: ["Took some courses", "Had some fun"],
    address: "Pomona, CA",
    yearsAttending: "2020-2024",
  });

  return (
    <>
      <BasicInfoInput basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
      <EducationInfoInput
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
    </>
  );
}

export default App;
