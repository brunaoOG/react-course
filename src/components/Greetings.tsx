type Props = {
  hours: number;
};

export const Greeting = ({ hours }: Props) => {
  return (
    <div className="font-bold text-2xl ">
      {hours >= 0 && hours <= 5
        ? "Boa Madrugada 🌑"
        : hours > 5 && hours < 12
        ? "Bom dia 🌞"
        : hours >= 12 && hours < 18
        ? "Boa Tarde 🌞"
        : hours >= 18 && hours <= 23
        ? "Boa noite 🌝"
        : "se foda"}
    </div>
  );
};
