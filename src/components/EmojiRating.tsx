type Props = {
  rate: number;
};

export const EmojiRating = ({ rate }: Props) => {
  rate = rate > 5 ? 5 : rate < 0 ? 0 : rate;

  let emojiLevels = ["☹️", "🫤", "🫡", "😃", "😁"];

  let rating = `${emojiLevels[rate - 1]}`.repeat(rate).padEnd(10, "😶");

  return (
    <div className="flex justify-center items-center gap-4 p-5 ">
      <div className="text-3xl bg-black/40 rounded-lg p-6 ">{rate}.0</div>
      <div className="p-3 bg-black/20 rounded-md text-[40px]">{rating}</div>
    </div>
  );
};

