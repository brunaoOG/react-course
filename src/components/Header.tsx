import { Feed } from "./Feed";
import { Footer } from "./Footer";
import { Publisher } from "./Publisher";

export const Main = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold text-blue-500 bg-black/40 rounded-lg py-1 px-2 w-fit">
          B7gram
        </h1>
        <Publisher />
        <h1 className="font-bold py-1 text-2xl">Feed</h1>
        <Feed />
        <Footer />
      </div>
    </div>
  );
};
