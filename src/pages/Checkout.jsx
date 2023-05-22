import { AddressCard, AddressForm, SummaryCard } from "../components";
import { useProductsContext } from "../contexts";

const Checkout = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { addressList } = useProductsContext();

  return (
    <div className="md:min-h-[80vh] flex justify-center items-center py-3">
      <main className="grid md:grid-cols-2 gap-10 w-full">
        <section className="p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
          <h1 className="text-3xl font-bold">Address</h1>
          {addressList.map((address) => (
            <AddressCard address={address} />
          ))}
          {showAddressForm ? (
            <AddressForm setShowAddressForm={setShowAddressForm} />
          ) : (
            <div className="flex flex-col items-start">
              <h3 className=" text-gray-600 ms-1 my-2">OR</h3>
              <button
                className="btn-rounded-primary text-sm"
                onClick={() => setShowAddressForm(!showAddressForm)}
              >
                + Add New Address
              </button>
            </div>
          )}
        </section>
        <SummaryCard />
      </main>
    </div>
  );
};

export default Checkout;
