import { PiDeviceRotateBold } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { GoZap } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";

export const benefitsData = [
  {
    id: 1,
    title: "Flexible Trade-In Options",
    description:
      "Easily trade in your current vehicle and apply its value toward your next purchase with a hassle-free process.",
    icon: <PiDeviceRotateBold className="w-8 h-8 text-center mx-auto" />,
  },
  {
    id: 2,
    title: "Comprehensive Warranty Coverage",
    description:
      "Drive with confidence knowing your vehicle is protected by our extensive warranty plans tailored to your needs.",
    icon: <GoShieldCheck className="w-8 h-8 text-center mx-auto" />,
  },
  {
    id: 3,
    title: "Instant Online Pre-Approval",
    description:
      "Get pre-approved for financing in minutes with our simple, secure online application process.",
    icon: <GoZap className="w-8 h-8 text-center mx-auto" />,
  },
  {
    id: 4,
    title: "Wide Vehicle Selection",
    description:
      "Choose from an extensive inventory of high-quality vehicles, including the latest models and certified pre-owned cars.",
    icon: <IoCarSport className="w-8 h-8 text-center mx-auto" />,
  },
];
