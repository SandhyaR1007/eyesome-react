import { useState } from "react";
import { SummaryCard } from "../components";

const Checkout = () => {
  const [addressData, setAddressData] = useState([
    {
      address: "8505 Christina Ridges West Cooper Arunachal Pradesh Pin:820598",
      mobile: 1293452481,
    },
  ]);
  const [newAddress, setNewAddress] = useState({
    flat: "aaaa54665464",
    area: "ccc y556567788",
    town: "aaa y698590809",
    pincode: "123345",
  });

  const AddressCard = ({ address, pincode }) => {
    return (
      <label className="flex bg-gray-50 items-center gap-2 shadow-sm p-4 rounded-sm">
        <input type="radio" name="address" id="" className="accent-current" />
        <p>
          {address}
          Mobile:
          {pincode}
        </p>
      </label>
    );
  };
  return (
    <div className="md:min-h-[80vh] flex justify-center items-center py-3">
      <main className="grid md:grid-cols-2 gap-10 w-full">
        <section className="p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
          <h1 className="text-3xl font-bold">Address</h1>
          {addressData.map(({ address, pincode }) => (
            <AddressCard address={address} pincode={pincode} />
          ))}
          <h3 className="text-denter text-gray-600">OR</h3>
          <form
            action=""
            className="flex flex-col gap-3 p-5 bg-gray-50 shadow-sm"
          >
            <label className="flex flex-col">
              Flat, House no., Building
              <input
                type="text"
                className="border rounded-md p-1.5 shadow-sm"
              />
            </label>
            <label className="flex flex-col">
              Area, Colony, Street
              <input
                type="email"
                className="border rounded-md p-1.5 shadow-sm"
              />
            </label>
            <div className="flex gap-2 flex-wrap">
              <label className="flex flex-1 flex-col">
                Town/City
                <input
                  type="password"
                  className="border rounded-md p-1.5 shadow-sm"
                />
              </label>
              <label className="flex flex-1 flex-col">
                Pin Code
                <input
                  type="password"
                  className="border rounded-md p-1.5 shadow-sm"
                />
              </label>
            </div>
            <div className="flex gap-3 mt-3">
              <button className="btn-rounded-secondary rounded-full flex items-center gap-2 md:text-sm lg:text-base">
                Cancel
              </button>
              <button
                className="btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base"
                onClick={() => {
                  setAddressData([
                    ...addressData,
                    {
                      address: `${newAddress.area},${newAddress.flat},${newAddress.town}`,
                      pincode: newAddress.pincode,
                    },
                  ]);
                }}
              >
                Save
              </button>
            </div>
          </form>
        </section>
        <SummaryCard />
      </main>
    </div>
  );
};

export default Checkout;
