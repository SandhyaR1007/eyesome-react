import { useEffect, useState } from "react";
import { SummaryCard } from "../components";
import Address from "../components/address/Address";
import { useLocation, useNavigate } from "react-router";
import Modal from "../components/checkout/Modal";
import { useCartContext } from "../contexts";
import orderSuccess from "../assets/order-success.gif";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCartContext();
  const [showModal, setShowModal] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const location = useLocation();
  console.log({ location });
  useEffect(() => {
    if (location?.state !== "cart" || !cart.length) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {isOrderPlaced ? (
        <div className="min-h-[80vh] flex justify-center items-center py-3">
          <div className="bg-white h-1/2 w-96 m-auto shadow-sm flex flex-col items-center justify-center">
            <div className=" w-64  flex items-center justify-center ">
              <img src={orderSuccess} className="w-full object-fit" />
            </div>
            <p className="text-3xl py-8 font-semibold text-gray-400">
              Order Successful
            </p>
          </div>
          {/* <div className="font-sans text-xl md:text-6xl font-semibold uppercase tracking-wide text-gray-300">
            Nothing Here
          </div> */}
        </div>
      ) : (
        <div className="md:min-h-[80vh] flex justify-center items-center py-3">
          <main className="grid md:grid-cols-2 gap-10 w-full">
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              setIsOrderPlaced={setIsOrderPlaced}
            />
            <section className="p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
              <Address />
            </section>
            <SummaryCard setShowModal={setShowModal} />
          </main>
        </div>
      )}
    </>
  );
};

export default Checkout;
