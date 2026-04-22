import { CircleX } from "lucide-react";

const Modal = ({ setIsOpen, offer }) => {
  console.log(offer);
  const { details } = offer;
  const totalCost = details.duration * details.monthlyPayment * 12;

  return (
    <div className="fixed inset-0 bg-slate-800/60 bg-opacity-50 items-center justify-center flex backdrop-blur-md">
      <div className="bg-white py-8 px-12 rounded-md flex flex-col relative">
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
      </div>
    </div>
  );
};

export default Modal;
