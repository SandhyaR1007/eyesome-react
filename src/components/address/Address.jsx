import React, { Fragment, useState } from "react";

import { useProductsContext } from "../../contexts";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

const Address = ({ isEdit }) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const { addressList } = useProductsContext();
  return (
    <>
      {!isEdit && <h1 className="text-2xl font-bold">Address</h1>}
      {showAddressForm && !editAddress ? (
        <AddressForm
          setShowAddressForm={setShowAddressForm}
          editAddress={editAddress}
          setEditAddress={setEditAddress}
        />
      ) : (
        <div className="flex flex-col items-start ">
          <button
            className="btn-rounded-primary text-sm "
            onClick={() => {
              setShowAddressForm(true);
              setEditAddress(false);
            }}
          >
            + Add New Address
          </button>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {addressList.map((address) => (
          <Fragment key={address.id}>
            {showAddressForm && editAddress?.id === address.id ? (
              <AddressForm
                setShowAddressForm={setShowAddressForm}
                editAddress={editAddress}
                setEditAddress={setEditAddress}
              />
            ) : (
              <AddressCard
                address={address}
                isEdit={isEdit}
                editAddress={editAddress}
                setEditAddress={setEditAddress}
                setShowAddressForm={setShowAddressForm}
              />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Address;
