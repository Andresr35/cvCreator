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
  return (
    <>
      <label htmlFor="name">Please Enter Name</label>
      <input
        id="name"
        type="text"
        value={basicInfo.name}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      <label htmlFor="address">Please Enter Address</label>
      <input
        id="address"
        type="text"
        value={basicInfo.address}
        onChange={(e) => handleAddressChange(e.target.value)}
      />
      <label htmlFor="number">Please Enter Number</label>
      <input
        id="number"
        type="tel"
        pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
        value={basicInfo.number}
        onChange={(e) => handleNumberChange(e.target.value)}
      />
    </>
  );
};
BasicInfoInput.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  setBasicInfo: PropTypes.func.isRequired,
};

export default BasicInfoInput;