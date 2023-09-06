import PropTypes from "prop-types";

const BasicInfoInput = ({ basicInfo, setBasicInfo }) => {
  const handleNameChange = (newName) => {
    const newBasicInfo = { ...basicInfo, name: newName };
    setBasicInfo(newBasicInfo);
  };
  const handleAddressChange = (newAddress) => {
    const newBasicInfo = { ...basicInfo, address: newAddress };
    setBasicInfo(newBasicInfo);
  };
  const handleNumberChange = (newNumber) => {
    const newBasicInfo = { ...basicInfo, number: newNumber };
    setBasicInfo(newBasicInfo);
  };
  const handleEmailChange = (newEmail) => {
    const newBasicInfo = { ...basicInfo, email: newEmail };
    setBasicInfo(newBasicInfo);
  };
  return (
    <div>
      <label>
        Please Enter Name:
        <input
          id="name"
          type="text"
          value={basicInfo.name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
      </label>

      <label>
        Please Enter Address:
        <input
          id="address"
          type="text"
          value={basicInfo.address}
          onChange={(e) => handleAddressChange(e.target.value)}
        />
      </label>

      <label>
        Please Enter Number:
        <input
          id="number"
          type="tel"
          pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
          value={basicInfo.number}
          onChange={(e) => handleNumberChange(e.target.value)}
        />
      </label>

      <label>
        Please Enter Email:
        <input
          id="email"
          type="text"
          value={basicInfo.email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
      </label>
    </div>
  );
};
BasicInfoInput.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  setBasicInfo: PropTypes.func.isRequired,
};

export default BasicInfoInput;
