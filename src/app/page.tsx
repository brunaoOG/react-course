import { rappersList } from "../data/rappersList";
import { SvgTrophy, SvgRanking } from "../components/Svg";
import { Rapper } from "../types/Rappers";

const Page = () => {
  const top3Rappers = rappersList.filter((rapper) => {
    return Number(rapper.rank) < 4;
  });

  const newArray = rappersList.filter(
    (rapper) => rapper.name.split(" ").length > 1
  );

  const list = (array: Rapper[]) => {
    const result = array.map((rapper) => {
      return (
        <li key={rapper.id} className="flex">
          <p className="p-4 rounded-s-md bg-black/40">{rapper.name}</p>
          <div className="flex-1 flex justify-end gap-2 p-4  rounded-e-md bg-black/40 ">
            {Number(rapper.rank) < 4 && <SvgTrophy />}
            <p className="border border-white rounded-full text-[12px]  w-5 h-5 text-center">
              {rapper.rank}
            </p>
          </div>
        </li>
      );
    });

    return result;
  };

  return (
    <div className="p-5 w-fit">
      <div className=" w-full flex items-center gap-3 text-2xl mb-2">
        <h1>Rappers Rank</h1>
        <SvgRanking />
      </div>
      <ul className="w-[400px] flex flex-col">{list(newArray)}</ul>
    </div>
  );
};

export default Page;
