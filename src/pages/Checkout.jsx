import { SummaryCard } from "../components";
import Address from "../components/address/Address";

const Checkout = () => {
  return (
    <div className="md:min-h-[80vh] flex justify-center items-center py-3">
      <main className="grid md:grid-cols-2 gap-10 w-full">
        <section className="p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
          <Address />
        </section>
        <SummaryCard />
      </main>
    </div>
  );
};

export default Checkout;
