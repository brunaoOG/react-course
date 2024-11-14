// import { OrangeSqr } from "../components/OrangeSqr";
// import { BlueSqr } from "../components/BlueSqr";
import { SquareArea } from "../components/Squares";
import { Person } from "../components/Person";
import { Card } from "../components/Card";

const Page = () => {
  return (
    <div>
      <Card>
        <>
          <h3>"And she just bleached her asshole"</h3>
          <p className="text-sm text-right mr-[-25px]">-Kanye West</p>
          <Person name="User" roles={["Algo", "Algo", "Algo"]} />
        </>
      </Card>
    </div>
  );
};

export default Page;
