import { CircleDollarSign, Percent } from "lucide-react";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Info from "./Info";
import Headding from "../ui/Headding";

const Card = ({ offer }) => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50 p-6 rounded-lg">
      <Image img={offer.image} />

      <Headding>{offer.name}</Headding>

      <Info value={offer.loanAmount} title="Loan Amount">
        <CircleDollarSign className="bg-blue-300 text-blue-700 rounded-md" />
      </Info>

      <Info title="Interest Rate" value={offer.interestRate}>
        <Percent className="bg-green-200 text-green-500 rounded-md" />
      </Info>

      <Button />
    </div>
  );
};

export default Card;
