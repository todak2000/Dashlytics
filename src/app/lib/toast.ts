/* eslint-disable import/no-extraneous-dependencies */
import { toast } from "react-hot-toast";

enum ToastPosition {
  TOPRIGHT = "top-right",
  TOPLEFT = "top-left",
  TOPCENTER = "top-center",
  BOTTOMLEFT = "bottom-left",
  BOTTOMRIGHT = "bottom-right",
  BOTTOMCENTER = "bottom-center",
}
interface ToastProps {
  msg: string;
  position?: ToastPosition;
}

const mtToastStyle = {
  style: {
    fontSize: "14px",
    fontWeight: "medium",
    backgroundColor: "white",
    color: "#26282c",
  },
};

export const DashlyticsToast = {
  success: ({ msg, position = ToastPosition.TOPRIGHT }: ToastProps) =>
    toast.success(msg, {
      position,
      duration: 6000,
      ...mtToastStyle,
    }),

  error: ({ msg, position = ToastPosition.TOPRIGHT }: ToastProps) =>
    toast.error(msg, { duration: 6000, position, ...mtToastStyle }),
  warn: ({ msg, position = ToastPosition.TOPRIGHT }: ToastProps) =>
    toast.custom(msg, {
      position,
      duration: 6000,
      style: {
        backgroundColor: "white",
        fontSize: "15px",
        color: "yellow",
      },
      className: "bg-primary-60 text-neutral white",
    }),
};

export const showToast = () => {
  DashlyticsToast.error({
    msg: `Oops! 🚧 This feature is still under construction. Please check back soon! 😊`,
  });
};
export const showSalesToast = (n: number) => {
  if (n > 0) {
    DashlyticsToast.success({
      msg: `Yea! 💪 Sales trend data updated 📈 `,
    });
  } else {
    DashlyticsToast.error({
      msg: `Oops! 🕵️‍♀️ We couldn’t find any data. Please try again later! 😊`,
    });
  }
};
