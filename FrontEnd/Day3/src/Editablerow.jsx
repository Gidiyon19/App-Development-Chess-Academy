// eslint-disable-next-line no-unused-vars
import React from "react";
// import ReadOnlyRow from "./ReadOnlyRow";
const Editablerow = ({
//   editFormData,
//   handleEditFormChange,
//   handleCancelClick,
}) => {
  return (
      <tr>
      <td>
        {/* <ReadOnlyRow/> */}
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
        //   value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
        //   value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
        //   value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
        //   value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Editablerow;