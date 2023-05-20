import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthContext } from "../contexts";
import { useNavigate } from "react-router";

const Profile = () => {
  const userDetails = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("profile");
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
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
  const AddressForm = () => {
    return (
      <form
        action=""
        className="flex flex-col gap-3 p-5 bg-gray-50 shadow-md my-3"
      >
        <label className="flex flex-col">
          Flat, House no., Building
          <input type="text" className="border rounded-md p-1.5 shadow-sm" />
        </label>
        <label className="flex flex-col">
          Area, Colony, Street
          <input type="email" className="border rounded-md p-1.5 shadow-sm" />
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
          <button
            type="button"
            onClick={() => setAddNewAddress(!addNewAddress)}
            className="btn-rounded-secondary rounded-full flex items-center gap-2 md:text-sm lg:text-base"
          >
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
              setAddNewAddress(!addNewAddress);
            }}
          >
            Save
          </button>
        </div>
      </form>
    );
  };
  const AddressCard = ({ address, pincode }) => {
    return (
      <div className="flex flex-col bg-gray-50  gap-2 shadow-sm p-4 rounded-sm my-2">
        <p>
          {address}
          Mobile:
          {pincode}
        </p>
        <div className="flex gap-3">
          <button className="text-amber-500 font-bold">Edit</button>
          <button className="text-red-600 font-bold">Remove</button>
        </div>
      </div>
    );
  };

  const { logoutHandler } = useAuthContext();

  const handleLogOut = () => {
    setLoggingOut(true);
    setTimeout(() => {
      logoutHandler();
      setLoggingOut(false);
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] min-w-md max-w-lg m-auto mt-10">
      <section className="h-full p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full">
        <div className="flex">
          <button
            className={`flex-1 text-sm  ${
              selectedItem === "profile"
                ? "bg-[--primary-text-color] text-white"
                : "bg-gray-100"
            } p-3 shadow-sm transition-colors `}
            onClick={() => setSelectedItem("profile")}
          >
            Profile
          </button>
          <button
            onClick={() => setSelectedItem("address")}
            className={`flex-1 text-sm  ${
              selectedItem === "address"
                ? "bg-[--primary-text-color] text-white"
                : "bg-gray-100"
            } p-3 shadow-sm transition-colors `}
          >
            Address
          </button>
        </div>
        {selectedItem === "profile" ? (
          <div className="flex flex-col gap-4 w-full p-5">
            <p>
              <span className="text-gray-600 me-1">Username:</span>
              {userDetails?.username}
            </p>
            <p>
              {" "}
              <span className="text-gray-600 me-1">Email:</span>{" "}
              {userDetails?.email ?? ""}
            </p>
            <hr />
            <button
              disabled={loggingOut}
              className="w-1/2 text bg-rose-600 py-2 px-4 text-white rounded-md hover:bg-rose-700"
              onClick={handleLogOut}
            >
              {loggingOut ? "Logging Out..." : "Logout"}
            </button>
          </div>
        ) : (
          <div>
            {addressData.map((data) => (
              <AddressCard address={data.address} pincode={data.pincode} />
            ))}

            {addNewAddress ? (
              <AddressForm />
            ) : (
              <button
                className="btn-rounded-primary text-sm mt-3 flex gap-1 "
                onClick={() => setAddNewAddress(!addNewAddress)}
              >
                <AiOutlinePlus className="mb-1" /> Add New Address
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;
