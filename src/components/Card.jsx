import { CircleDollarSign, Percent } from "lucide-react";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Info from "./Info";
import Headding from "../ui/Headding";

const Card = ({ offer, setIsOpen, setOffer, minRate }) => {
  const showDetails = () => {
    setOffer(offer);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col gap-4 bg-slate-50 p-6 rounded-lg relative">
      {minRate === offer.interestRate && (
        <span className="bg-green-400 text-slate-50 px-2 rounded-full absolute -top-2.5 left-0 text-sm">
          Recomended
        </span>
      )}
      <Image img={offer.image} />

      <Headding>{offer.name}</Headding>

      <Info value={`${offer.loanAmount}DH`} title="Loan Amount">
        <CircleDollarSign className="bg-blue-300 text-blue-700 rounded-md" />
      </Info>

      <Info
        title="Interest Rate"
        value={`${(offer.interestRate * 100).toFixed(1)}%`}
      >
        <Percent className="bg-green-200 text-green-500 rounded-md" />
      </Info>

      <Button onShowDetails={showDetails}>View Details</Button>
    </div>
  );
};

export default Card;
