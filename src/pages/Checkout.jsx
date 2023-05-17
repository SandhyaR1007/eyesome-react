import { useState } from "react";
import glassCategory1 from "../assets/glassCategory1.png";

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
  const product = {
    id: 1,
    name: "Classic Aviator",
    price: 4999.99,
    category: "sunglasses",
    rating: 4.5,
    image: glassCategory1,
    description:
      "These classic aviator sunglasses are perfect for any occasion.",
  };

  const ItemsCard = () => {
    return (
      <div className="flex flex-col gap-2 shadow-sm p-4 rounded-sm ">
        <div className="flex  items-center flex-wrap gap-2 w-full">
          <div className="flex flex-1 items-center gap-2">
            <div className=" bg-black/[0.075] h-16 w-16 rounded-md flex items-center">
              <img src={glassCategory1} alt="" className="object-fit w-full" />
            </div>
            <div className="">
              <h2>{product.name}</h2>
              <span>{product.price}</span>
            </div>
          </div>
          <div className="">2</div>
        </div>
      </div>
    );
  };

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

        <section className="py-7 px-12 md:px-7 lg:px-12 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
          <h1 className="text-3xl font-bold">Order Summary</h1>
          <ItemsCard />
          <ItemsCard />
          <ItemsCard />
          <hr />
          <div className=" flex justify-between items-center ">
            <p className=" text-gray-600">Subtotal</p>
            <p className="text-lg">100000</p>
          </div>
          <div className=" flex justify-between items-center ">
            <p className=" text-gray-600">Discount</p>
            <p className="text-lg">-10000</p>
          </div>

          <div className=" flex justify-between items-center">
            <p className=" text-gray-600">Delivery Charges</p>
            <p className="text-lg">Free</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className=" text-gray-600">Total</p>
            <p className="text-2xl">90000</p>
          </div>

          <div className="w-full py-2   flex gap-4 items-center">
            <button className="btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base">
              Place Order
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
