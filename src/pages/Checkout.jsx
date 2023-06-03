import { useEffect, useState } from "react";
import { SummaryCard } from "../components";
import Address from "../components/address/Address";
import { useLocation, useNavigate } from "react-router";
import Modal from "../components/checkout/Modal";
import { useCartContext } from "../contexts";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCartContext();
  const [showModal, setShowModal] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location?.state !== "cart" || !cart.length) {
      navigate("/");
    }
  }, []);

  return (
    <>
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
    </>
  );
};

export default Checkout;
