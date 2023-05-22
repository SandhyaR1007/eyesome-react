import { useProductsContext } from "../../contexts";

const AddressCard = ({ address }) => {
  const { id, fullname, mobile, flat, area, city, pincode } = address;
  const { currentAddress, setCurrentAddress } = useProductsContext();
  return (
    <label className="flex bg-gray-50 items-center gap-2 shadow-sm p-4 rounded-sm">
      <input
        type="radio"
        name="address"
        id=""
        className="accent-current"
        checked={id === currentAddress.id}
        onChange={() => setCurrentAddress(address)}
      />
      <div>
        <h3 className="text-lg font-semibold">{fullname}</h3>
        <p className="text-sm text-gray-500">
          {flat},{area}
        </p>
        <p className="text-sm text-gray-500">
          {city},{pincode}
        </p>
        <p className="text-sm text-gray-500">
          Mobile:
          <span className="font-semibold ps-1">{mobile}</span>
        </p>
      </div>
    </label>
  );
};
export default AddressCard;
