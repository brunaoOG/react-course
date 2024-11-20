import { EmojiRating } from "../components/EmojiRating";

const Page = () => {
  let rate = 3;

  return (
    <div className="flex justify-center items-center gap-4 p-5 ">
      <div className="text-3xl bg-black/40 rounded-lg p-6 ">{rate}.0</div>
      <EmojiRating rate={rate} />
    </div>
  );
};

export default Page;
