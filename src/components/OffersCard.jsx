import { data } from "../data/offers";
import Card from "./Card";

const OffersCard = () => {
  return (
    <div className="bg-slate-200 h-full w-full md:grid md:grid-cols-2 xl:grid-cols-3 lg:items-center lg:justify-center gap-2.5 p-4 space-y-2">
      {data.map((offer, index) => (
        <Card key={index} offer={offer} />
      ))}
    </div>
  );
};

export default OffersCard;
