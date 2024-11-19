import { Greeting } from "../components/Greetings";

const Page = () => {
  let hour = `${new Date().getHours()}:${
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes()
  }`;

  let h = Number(new Date().getHours());

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-bl from-blue-700 to-blue-400">
      <h1 className="text-[100px] font-bold">{hour}</h1>
      <div className="font-bold text-2xl ">
        {h >= 0 && h <= 5 && "Boa Madrugada 🌑"}
        {h > 5 && h < 12 && "Bom Dia 🌞"} 
        {h >= 12 && h < 18 && "Boa Tarde 🌞"}
        {h > 18 && h <= 23 && "Boa Noite 🌝"}
      </div>
    </div>
  );
};

export default Page;
