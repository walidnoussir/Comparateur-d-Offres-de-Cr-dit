import OffersCard from "./components/OffersCard";
import Headding from "./ui/Headding";

const App = () => {
  return (
    <div className="bg-slate-200 h-screen w-full space-y-2">
      <Headding>Comparateur d’Offres de Crédit</Headding>
      <OffersCard />
    </div>
  );
};

export default App;
