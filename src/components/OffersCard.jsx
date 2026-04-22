import { data } from "../data/offers";
import Card from "./Card";

const OffersCard = () => {
  return (
    <div className="h-[90%] w-full md:grid md:grid-cols-2 xl:grid-cols-3 lg:items-center lg:justify-center gap-2.5 p-4 space-y-2 overflow-y-auto">
      {data.map((offer, index) => (
        <Card key={index} offer={offer} />
      ))}
    </div>
  );
};

export default OffersCard;
