import { useEffect, useState } from "react";
import { SummaryCard } from "../components";
import Address from "../components/address/Address";
import { useLocation, useNavigate } from "react-router";
import Modal from "../components/checkout/Modal";
import { useCartContext } from "../contexts";
import orderSuccess from "../assets/success-order.gif";

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
        <div className="min-h-[80vh] flex justify-center items-center py-3 ">
          <div
            className="bg-white h-1/2 w-96 m-auto  rounded-md flex flex-col items-center justify-center p-5"
            style={{
              boxShadow: "rgba(17, 12, 46, 0.1) 0px 48px 120px 0px",
            }}
          >
            <div className=" w-64  flex items-center justify-center ">
              <img
                src={orderSuccess}
                alt="order-successfull"
                className="w-full object-fit"
              />
            </div>
            <p className="text-3xl py-2 font-semibold text-gray-700">
              Order Successful
            </p>
            <p className="text-sm text-gray-400">
              Thank you for ordering with us :)
            </p>
          </div>
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
