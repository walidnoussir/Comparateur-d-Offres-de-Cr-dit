import { CircleX } from "lucide-react";
import Bonus from "../components/Bonus";

const Modal = ({ setIsOpen, offer }) => {
  const { details } = offer;
  const totalCost = details.duration * details.monthlyPayment * 12;

  return (
    <div className="fixed inset-0 bg-slate-800/60 bg-opacity-50 items-center justify-center flex flex-col backdrop-blur-md">
      <div className="w-[70%] bg-white py-8 px-12 rounded-md flex flex-col gap-4 relative">
        <button
          className="absolute right-0 top-0 cursor-pointer p-0.5"
          onClick={() => setIsOpen(false)}
        >
          <CircleX className="text-slate-600" />
        </button>
        <h2 className="flex justify-between gap-4">
          Duration : <span>{details.duration}</span>
        </h2>
        <p className="flex justify-between gap-4">
          Monthly Payment : <span>{details.monthlyPayment}</span>
        </p>
        <p className="flex justify-between gap-4">
          Total Coast : <span>{totalCost}</span>
        </p>
        <Bonus offer={offer} />
      </div>
    </div>
  );
};

export default Modal;
