import { useState } from "react";
import glassCategory1 from "../assets/glassCategory1.png";

const Profile = () => {
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
      <main className="max-w-lg m-auto">
        <section className="p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
          <div className="flex">
            <button className="flex-1 text-lg bg-[--primary-text-color] text-white p-3 shadow-sm">
              Profile
            </button>
            <button className="flex-1 text-lg bg-gray-100 p-3 shadow-sm ">
              Address
            </button>
          </div>

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
      </main>
    </div>
  );
};

export default Profile;
