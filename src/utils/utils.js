import { toast } from "react-toastify";

export const notify = (type, message, delay) => {
  if (type === "success") {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      delay,
    });
  } else if (type === "error") {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      delay,
    });
  } else if (type === "warn") {
    toast.warn(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      delay,
    });
  } else {
    toast.info(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      delay,
    });
  }
};
