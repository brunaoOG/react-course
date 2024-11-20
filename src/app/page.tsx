import { EmojiRating } from "../components/EmojiRating";

const Page = () => {
  let rate = 0.0;

  return (
    <div className="flex">
      <EmojiRating rate={rate} />
    </div>
  );
};

export default Page;
