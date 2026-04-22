import { useState } from "react";
import OffersCard from "./components/OffersCard";
import Headding from "./ui/Headding";
import Modal from "./ui/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offer, setOffer] = useState({});

  return (
    <div className="bg-slate-200 h-screen w-full space-y-2">
      <Headding>Comparateur d’Offres de Crédit</Headding>
      <OffersCard setIsOpen={setIsOpen} setOffer={setOffer} />
      {isOpen && <Modal setIsOpen={setIsOpen} offer={offer} />}
    </div>
  );
};

export default App;
