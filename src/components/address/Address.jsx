import React, { useState } from "react";

import { useProductsContext } from "../../contexts";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

const Address = ({ isEdit }) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { addressList } = useProductsContext();
  return (
    <>
      {!isEdit && <h1 className="text-2xl font-bold">Address</h1>}
      {addressList.map((address) => (
        <AddressCard address={address} isEdit={isEdit} />
      ))}
      {showAddressForm ? (
        <AddressForm setShowAddressForm={setShowAddressForm} />
      ) : (
        <div className="flex flex-col items-start ">
          <h3 className=" text-gray-600 ms-1 my-2">OR</h3>
          <button
            className="btn-rounded-primary text-sm "
            onClick={() => setShowAddressForm(!showAddressForm)}
          >
            + Add New Address
          </button>
        </div>
      )}
    </>
  );
};

export default Address;
