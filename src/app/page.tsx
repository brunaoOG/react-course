// import { OrangeSqr } from "../components/OrangeSqr";
// import { BlueSqr } from "../components/BlueSqr";
import { SquareArea } from "../components/Squares";
import { Person } from "../components/Person";

const Page = () => {
  return (
    <div className="flex">
      <Person
        name="Kanye West"
        avatar="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds"
        roles={["Greatest Rapper", "Greatest Producer", "Greatest Artist"]}
      />
      <Person
        name="Young Thug"
        avatar="https://lastfm.freetls.fastly.net/i/u/ar0/8e57ec747008d26ccb20285dd1e48825.jpg"
        roles={["Greatest Trapper", "Trap Creator", "Most Beautiful Man"]}
      />
      <Person
        name="Usuário"
        roles={["Z", "Y", "X"]}
      />
    </div>
  );
};

export default Page;
