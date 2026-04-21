import Card from "./components/Card";
import { data } from "./data/offers";

const App = () => {
  return (
    <div className="bg-slate-200 h-screen w-full md:grid md:grid-cols-2 xl:grid-cols-3 lg:items-center lg:justify-center gap-2.5 p-4 space-y-2">
      {data.map((offer, index) => (
        <Card key={index} offer={offer} />
      ))}
    </div>
  );
};

export default App;
